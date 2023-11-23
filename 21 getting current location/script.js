const button = document.getElementById("button");
const h2 = document.getElementById("h2");

async function fetchWeather(lat, long) {
  const dataFromApi = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=28af112a524a445b8ed174929230711 &q=${
      (lat, long)
    }&aqi=no`
  );
  return await dataFromApi.json();
}

button.addEventListener("click", () => {
  // this takes two callbacks, 1. success callback, 2. not successful callback
  // 1. first callback take positon argument
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const weather_data = await fetchWeather(
        position.coords.latitude,
        position.coords.longitude
      );
      h2.innerText = `Current Weather in '${weather_data.location.name}' is '${weather_data.current.condition.text}'`;
    },
    () => {
      console.log("cannot get weather due to some issues");
    }
  );
});
