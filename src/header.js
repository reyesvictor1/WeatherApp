function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    
    const headerLogo = document.createElement("div");
    headerLogo.classList.add("header-logo");
    headerLogo.textContent = "WEATHER APP";

    const searchBar = document.createElement("div");
    searchBar.classList.add("search-bar");

    const searchInput = document.createElement("input");
    searchInput.classList.add("search-input");

    const searchButton = document.createElement("button");
    searchButton.classList.add("search-button");
    searchButton.type = "submit";
    searchButton.textContent = "SEARCH";

    searchBar.appendChild(searchInput);
    searchBar.appendChild(searchButton);

    const scaleButton = document.createElement("button");
    scaleButton.classList.add("scale-button");
    scaleButton.type = "button";
    scaleButton.textContent = "°C";

    header.appendChild(headerLogo);
    header.appendChild(searchBar);
    header.appendChild(scaleButton);

    return header;
}

export default createHeader;