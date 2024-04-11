// webpack entry point

import loadWebsite from "./website";

loadWebsite();


const API_KEY = "70e3cf7304a74cf9955191438243103";
const URL = "https://api.weatherapi.com/v1/current.json";
let responseJSON = {};
let CITY = "";
let isCelsius = true;

const resultsCard = document.querySelector(".results-card");
const city = document.querySelector(".city");
const regionAndCOuntry = document.querySelector(".region-and-country");
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const scaleButton = document.querySelector(".scale-button");

scaleButton.addEventListener("click", toggleScale);
searchButton.addEventListener("click", fetchData);
searchInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) fetchData();
});

async function fetchData() {
    if (!searchInput.value) return alert("Search input is empty!");
    
    CITY = searchInput.value;
    try {
        const response = await fetch(`${URL}?key=${API_KEY}&q=${CITY}`);
        responseJSON = await response.json();
        populateResultsCard();
    } catch (error) {
        alert(responseJSON.error.message);
    }
}

function populateResultsCard() {
    city.textContent = responseJSON.location.name;
    regionAndCOuntry.textContent = `${responseJSON.location.region}, ${responseJSON.location.country}`;
    icon.src = responseJSON.current.condition.icon;
    humidity.textContent = `humidity: ${responseJSON.current.humidity}%`;
    wind.textContent = `wind: ${responseJSON.current.wind_kph} kph`;
    displayTemperature();
    resultsCard.style.display = "flex";
}

function displayTemperature() {
    if (isCelsius) {
        temperature.textContent = `${responseJSON.current.temp_c}°C`;
        feelsLike.textContent = `feels like: ${responseJSON.current.feelslike_c}°C`;
    } else {
        temperature.textContent = `${responseJSON.current.temp_f}°F`;
        feelsLike.textContent = `feels like: ${responseJSON.current.feelslike_f}°F`;
    }
}

function toggleScale() {
    isCelsius = !isCelsius;
    scaleButton.textContent = isCelsius ? "°C" : "°F";
    if (Object.keys(responseJSON).length) displayTemperature();
}

