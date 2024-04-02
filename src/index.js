// webpack entry point

import loadWebsite from "./website";

loadWebsite();


const API_KEY = "70e3cf7304a74cf9955191438243103";
const URL = "https://api.weatherapi.com/v1/current.json";
let CITY = "";
let isCelsius = true;

const resultsCard = document.querySelector(".results-card");
const city = document.querySelector(".city");
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

searchButton.addEventListener("click", fetchData);
searchInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) fetchData();
});

async function fetchData() {
    if (!searchInput.value) return alert("Search input is empty!");

    CITY = searchInput.value;
    const response = await fetch(`${URL}?key=${API_KEY}&q=${CITY}`);
    const responseJSON = await response.json();
    console.log(responseJSON);
    populateResultsCard(responseJSON);
}

function populateResultsCard(responseJSON) {
    city.textContent = responseJSON.location.name;
    icon.src = responseJSON.current.condition.icon;
    temperature.textContent = responseJSON.current.temp_c;
    feelsLike.textContent = responseJSON.current.feelslike_c;
    humidity.textContent = responseJSON.current.humidity;
    wind.textContent = responseJSON.current.wind_kph;
    resultsCard.style.display = "block";
}