import { useState } from "react";
import { useWeather } from "./useWeather";
import weatherMap from "./constants/weatherMap";

// コンポーネントは表示とユーザー操作のみを担当する
const Weather = () => {
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("Tokyo");

  const { current, isLoading, error } = useWeather(city);

  const handleSearch = () => {
    const trimmed = inputCity.trim();
    if (!trimmed) return;
    setCity(trimmed);
  };

  // Enterキーでも検索できるようにする
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      {error && <p>{error}</p>}

      <h2>今日のお天気</h2>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="都市名を入力"
      />
      <button onClick={handleSearch}>取得</button>

      {isLoading && <p>読み込み中...</p>}
      {current && (
        <>
          <h3>{city}</h3>
          <ul>
            <li>{weatherMap[current.weather_code] ?? "不明"}</li>
            <li>気温: {current.temperature_2m}℃</li>
            <li>湿度: {current.relative_humidity_2m}%</li>
            <li>風速: {current.wind_speed_10m}km/h</li>
          </ul>
        </>
      )}
    </>
  );
};
export default Weather;

// import { useState, useEffect } from "react";
// import weatherMap from "./constants/weatherMap";

// const Weather = () => {
//   const [current, setCurrent] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchWeather() {
//       try {
//         const response = await fetch(
//           "https://api.open-meteo.com/v1/forecast?latitude=36.5551&longitude=139.8828&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
//         );
//         if (!response.ok) {
//           throw new Error(`データ取得に失敗しました ${response.status}`);
//         }
//         const weathersData = await response.json();

//         setCurrent(weathersData.current);
//       } catch (error) {
//         console.error(error);
//         setError("お天気情報を取得できませんでした");
//       }
//     }
//   }, []);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!current) {
//     return <p>読み込み中...</p>;
//   }

//   return (
//     <>
//       <h2>今日のお天気</h2>
//       <h3>{weatherMap[current.weather_code] ?? "不明"}</h3>
//       <ul>
//         <li>気温: {current.temperature_2m}℃</li>
//         <li>湿度: {current.relative_humidity_2m}%</li>
//         <li>風速: {current.wind_speed_10m}km/h</li>
//       </ul>
//     </>
//   );
// };
// export default Weather;
