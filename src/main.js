function createMain() {
    const main = document.createElement("main");
    
    const resultsCard = document.createElement("div");
    resultsCard.classList.add("results-card");
    
    const locationSection = document.createElement("div");
    locationSection.classList.add("location-section");

    const weatherSection = document.createElement("div");
    weatherSection.classList.add("weather-section");

    const additionalSection = document.createElement("div");
    additionalSection.classList.add("additional-section");

    const city = document.createElement("h1");
    city.classList.add("city");

    const regionAndCountry = document.createElement("p");
    regionAndCountry.classList.add("region-and-country");

    const icon = document.createElement("img");
    icon.classList.add("icon");

    const temperature = document.createElement("h2");
    temperature.classList.add("temperature");

    const feelsLike = document.createElement("p");
    feelsLike.classList.add("feels-like");

    const humidity = document.createElement("p");
    humidity.classList.add("humidity");

    const wind = document.createElement("p");
    wind.classList.add("wind");

    locationSection.appendChild(city);
    locationSection.appendChild(regionAndCountry);
    weatherSection.appendChild(icon);
    weatherSection.appendChild(temperature);
    additionalSection.appendChild(feelsLike);
    additionalSection.appendChild(humidity);
    additionalSection.appendChild(wind);
    resultsCard.appendChild(locationSection);
    resultsCard.appendChild(weatherSection);
    resultsCard.appendChild(additionalSection);

    main.appendChild(resultsCard);
    resultsCard.style.display = "none";

    return main;
}

export default createMain;