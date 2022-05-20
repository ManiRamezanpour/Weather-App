//TODO 1. Get the city Name :

const div = document.querySelector(".box");
const btn = document.getElementById("submit");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // disable the refresh on the page when submit
  const cityName = document.getElementById("form").value;
  Func(cityName);
  console.log(cityName);
});

//TODO 2. Get the city data with API :

function Func(_cityName) {
  const key = "63bcf1f93b394d200a4837c07f5e09d6";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${_cityName}&appid=${key}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      init(json);
    }) // Call drawWeather
    .catch(() => alert("Please check the city name  "));
}

function init(e) {
  let kelvin = 273;
  let temp = Math.floor(e.main.temp - kelvin) + "°C";
  // console.log(temp);icons/${icon1}.svg
  let descript = e.weather[0].description;
  console.log(descript);
  let wIconSrc =
    "http://openweathermap.org/img/w/" + e.weather[0].icon + ".png";
  // console.log(wIcon);
  const output = `
    <div class="weather">
      <div id="temp">
        <h1 id="description">${temp}</h1>
        <img src="${wIconSrc}" style= 'height:10rem'/>
      </div>
        <h1 id="temp">${descript}</h1>
    </div>`;
  div.innerHTML = output;
  switch (e.weather[0].main) {
    case "Clear":
      document.body.style.backgroundImage = "url('./img/cloud.jpg')";
      break;

    case "Clouds":
      document.body.style.backgroundImage = "url('./img/cloud.jpg')";
      break;

    case "Rain":
    case "Drizzle":
      document.body.style.backgroundImage = "url('./img/cloud.jpg')";
      break;

    case "Mist":
      document.body.style.backgroundImage = "url('./img/cloud.jpg')";
      break;

    case "Thunderstorm":
      document.body.style.backgroundImage = "url('./img/cloud.jpg')";
      break;

    case "Snow":
      document.body.style.backgroundImage = "url('./img/cloud.jpg')";
      break;

    default:
      break;
  }
}
