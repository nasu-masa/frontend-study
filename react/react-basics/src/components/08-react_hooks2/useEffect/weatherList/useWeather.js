import { useState, useEffect } from "react";

// データ取得ロジックをカスタムフックに分離
// city が変わるたびに再フェッチする
export function useWeather(city) {
  const [current, setCurrent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      // 検索開始時に前回の状態をリセット
      setIsLoading(true);
      setError(null);
      setCurrent(null);

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
        );
        const geoData = await geoRes.json();
        const geo = geoData.results?.[0];
        if (!geo) throw new Error("都市が見つかりません");

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`,
        );
        if (!weatherRes.ok)
          throw new Error(`データ取得に失敗しました ${weatherRes.status}`);

        const weatherData = await weatherRes.json();
        setCurrent(weatherData.current);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { current, isLoading, error };
}
