// WeatherAPI.com API Key
const apiKey = "fe6a84b459044af2bb380515251806";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found. Please check the spelling.");
      }
      return response.json();
    })
    .then(data => {
      const weatherInfoHTML = `
        <p><strong>📍 Location:</strong> ${data.location.name}, ${data.location.country}</p>
        <p><strong>🌡 Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>⛅ Condition:</strong> ${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="weather icon">
        <p><strong>💧 Humidity:</strong> ${data.current.humidity}%</p>
        <p><strong>💨 Wind:</strong> ${data.current.wind_kph} km/h</p>
        <p><strong>🕒 Local Time:</strong> ${data.location.localtime}</p>
      `;

      document.getElementById("weatherInfo").innerHTML = weatherInfoHTML;
    })
    .catch(error => {
      document.getElementById("weatherInfo").innerHTML = `
        <p style="color:red;">${error.message}</p>
      `;
    });
}
