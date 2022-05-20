//TODO 1. Get the city Name :
const btn = document.getElementById("submit");
btn.addEventListener("click", (e) => {
  e.preventDefault(); // disable the refresh on the page when submit
  const cityName = document.getElementById("form").value;
  Func(cityName);
});

//TODO 2. Get the city data with API :
function Func(_cityName) {
  const key = "63bcf1f93b394d200a4837c07f5e09d6";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${_cityName}&appid=${key}`
  )
    .then((response) => response.json())
    .then((json) => {
      drawWeather(json);
      console.log(json);
    }) // Call drawWeather
    .catch(() => {});
}

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  let div = document.querySelector(".box");
  const output = `
  <div class="weather">
    <h1 id="description">${d.weather[0].main}</h1>
    <h1 id="temp">${celcius}°c</h1>
    <h1 id="city">${d.name}</h1>
  </div>`;
  div.innerHTML = output;
  if ((d.weather[0].main = Clouds)) {
  }
  const body = document.querySelector("body");
}
