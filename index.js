let country = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let input = document.querySelector(".info input");
let button = document.querySelector(".info button");
let icon = document.querySelector(".icon");
let abiKey = "b946639e178dced2c02be490a7f5ceff";
let abiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  let respons = await fetch(abiUrl + city + `&appid=${abiKey}`);
  if (respons.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await respons.json();
    country.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " Km/h";
    if (data.weather[0].main == "Clouds") {
      icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
button.addEventListener("click", () => {
  checkWeather(input.value);
});
