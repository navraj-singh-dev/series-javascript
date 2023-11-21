const input = document.getElementById("input");
const button = document.getElementById("button");

const city_name = document.getElementById("city-name");
const temperature = document.getElementById("temperature");



async function getWeatherData(city) {
  const api_fetched_data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=28af112a524a445b8ed174929230711 &q=${city}&aqi=no`
  );
  return await api_fetched_data.json();
//   return converted_data;
}

button.addEventListener("click", async () => {
  const city = input.value;
  const data = await getWeatherData(city);
  city_name.innerText = `City : ${data.location.name}`;
  temperature.innerText = `temperature in celcius : ${data.current.temp_c}`;
});
