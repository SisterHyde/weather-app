// CHANGING CURRENT TIME AND DAY
let now = new Date();
let currentDay = now.getDay();
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();

//ADDING A ZERO IF MINUTES ARE UNDER 10
function getFullMinutes() {
  if (currentMinutes < 10) {
    return `0${currentMinutes}`;
  } else {
    return `${currentMinutes}`;
  }
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDay = days[currentDay];

let updateTime = document.querySelector("#date-time");
updateTime.innerHTML = `${currentDay}, ${currentHour}:${getFullMinutes(
  currentMinutes
)}`;

// CHANGING CITY BASED ON USER'S SEARCH INPUT
// function changeCity() {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-box");
//   let cityDisplay = document.querySelector("#current-location");
//   cityDisplay.innerHTML = searchInput.value;
// }

// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", changeCity);

// SWITCHING BETWEEN CELSIUS AND FAHRENHEIT
function selectCelsius() {
  let changeToCelsius = document.querySelector("#current-temp");
  changeToCelsius.innerHTML = "17°C";
  celsiusLink.classList.add("text-primary");
  fahrenheitLink.classList.remove("text-primary");
}

function selectFahrenheit() {
  let changeToFahrenheit = document.querySelector("#current-temp");
  changeToFahrenheit.innerHTML = "63°C";
  celsiusLink.classList.remove("text-primary");
  fahrenheitLink.classList.add("text-primary");
}

let celsiusLink = document.querySelector("#celsius");
let fahrenheitLink = document.querySelector("#fahrenheit");

celsiusLink.addEventListener("click", selectCelsius);
fahrenheitLink.addEventListener("click", selectFahrenheit);

// FETCHING WEATHER FROM API

function showTemp(response) {
  let currentTemp = document.querySelector("#current-temp");
  let tempResult = Math.round(response.data.main.temp);
  currentTemp.innerHTML = `${tempResult}`;
  console.log(tempResult);
}

function changeCity() {
  event.preventDefault();
  let city = document.querySelector("#search-box");
  let apiKey = "87b9e142701e346ddd9ec0db3824a563";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial`;
  let currentLocation = document.querySelector("#current-location");
  currentLocation.innerHTML = city.value;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", changeCity);

// CURRENT LOCATION ICON
// function getPosition(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let apiKey = "87b9e142701e346ddd9ec0db3824a563";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;

//   axios.get(`${apiUrl}&appid=${apiKey}`).then(showCurrentlocation);
// }

// function showCurrentlocation(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let location = response.data.name;
//   let autoLocation = document.querySelector("#current-location");
//   let autoTemp = document.querySelector("#current-temp");
//   autoLocation.innerHTML = location;
//   autoTemp.innerHTML = temperature;
//   console.log(temperature);
//   console.log(location);
// }

// let currentPlace = document.querySelector(".fa-solid");
// currentPlace.addEventListener(
//   "click",
//   navigator.geolocation.getCurrentPosition(getPosition)
// );
