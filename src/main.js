function createMain() {
    const main = document.createElement("main");
    
    const resultsCard = document.createElement("div");
    resultsCard.classList.add("results-card");
    
    const city = document.createElement("h1");
    city.classList.add("city");

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

    resultsCard.appendChild(city);
    resultsCard.appendChild(icon);
    resultsCard.appendChild(temperature);
    resultsCard.appendChild(feelsLike);
    resultsCard.appendChild(humidity);
    resultsCard.appendChild(wind);

    main.appendChild(resultsCard);
    resultsCard.style.display = "none";

    return main;
}

export default createMain;