async function fetchWeather() {
  const weatherDataList = document.querySelector("#weatherContainer");
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=36.5551&longitude=139.8828&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
    );
    if (!response.ok) {
      throw new Error(`データ取得に失敗しました ${response.status}`);
    }
    const weathersData = await response.json();
    console.log(weathersData.current);
    const current = weathersData.current;

    const weatherMap = {
      0: "快晴",
      1: "主に晴れ",
      2: "一部曇り",
      3: "曇り",
      45: "霧",
      48: "着氷性の霧",
      51: "弱い霧雨",
      53: "霧雨",
      55: "強い霧雨",
      61: "弱い雨",
      63: "雨",
      65: "強い雨",
      71: "弱い雪",
      73: "雪",
      75: "大雪",
      80: "にわか雨",
      81: "強いにわか雨",
      82: "激しいにわか雨",
      95: "雷雨",
      96: "雷雨（雹）",
      99: "激しい雷雨（雹）",
    };

    const weatherList = document.createElement("h2");
    weatherList.textContent = `${weatherMap[current.weather_code]}` ?? "不明";

    const temperature = document.createElement("li");
    temperature.textContent = `気温: ${current.temperature_2m}℃`;

    const humidity = document.createElement("li");
    humidity.textContent = `湿度: ${current.relative_humidity_2m}%`;

    const windSpeed = document.createElement("li");
    windSpeed.textContent = `風速: ${current.wind_speed_10m} km/h`;

    weatherDataList.before(weatherList);
    weatherDataList.appendChild(temperature);
    weatherDataList.appendChild(humidity);
    weatherDataList.appendChild(windSpeed);
  } catch (error) {

    console.error(error);
    weatherDataList.textContent = "お天気情報を取得できませんでした";
  }
}

fetchWeather();
