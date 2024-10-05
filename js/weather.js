const userLocation = document.querySelector(".weather_location");
const weather = document.querySelector(".weather_weather");
const temperture = document.querySelector(".weather_temperture");
const img = document.querySelector(".weather_img");

const API_KEY = "85871b49ff761266764ad799f0f36229";

function onGeoSuccess(postion){
    const lat = postion.coords.latitude;
    const lon = postion.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weatherImg = document.createElement("i");

    fetch(url).then((response) => response.json()).then((data) =>{
        userLocation.innerHTML = data.name;
        weatherImg.classList.toggle("fa-solid");
        if("Thunderstorm" == data.weather[0].main){
            weatherImg.classList.toggle("fa-bolt");
        } else if("Drizzle" == data.weather[0].main){
            weatherImg.classList.toggle("fa-cloud-rain");
        }
        else if("Rain" == data.weather[0].main){
            weatherImg.classList.toggle("fa-cloud-showers-heavy");
        }
        else if("Snow" == data.weather[0].main){
            weatherImg.classList.toggle("fa-snowflake");
        }
        else if("Atmosphere" == data.weather[0].main){
            weatherImg.classList.toggle("fa-smog");
        }
        else if("Clear" == data.weather[0].main){
            weatherImg.classList.toggle("fa-sun");
        }
        else{
            weatherImg.classList.toggle("fa-cloud");
        }
        document.querySelector(".weather_img").appendChild(weatherImg);
        weather.innerHTML = `weather: ${data.weather[0].main}`
        temperture.innerHTML = `temperture: ${data.main.temp}°C`
    })
    
}
function onGeofail(){
    userLocation.innerHTML = "We cannot support weather information"
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeofail);