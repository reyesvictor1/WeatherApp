/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    \n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} reyesvictor1`;\n    \n    const githubLink = document.createElement(\"a\");\n    githubLink.href = \"https://github.com/reyesvictor1\";\n    githubLink.target = \"blank\";\n    \n    const githubIcon = document.createElement(\"img\");\n    githubIcon.classList.add(\"github-icon\");\n    githubIcon.src = \"images/github.png\";\n    \n    githubLink.appendChild(githubIcon);\n    footer.appendChild(copyright);\n    footer.appendChild(githubLink);\n    \n    return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://weatherapp/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n    \n    const headerLogo = document.createElement(\"div\");\n    headerLogo.classList.add(\"header-logo\");\n    headerLogo.textContent = \"WEATHER APP\";\n\n    const searchBar = document.createElement(\"div\");\n    searchBar.classList.add(\"search-bar\");\n\n    const searchInput = document.createElement(\"input\");\n    searchInput.classList.add(\"search-input\");\n\n    const searchButton = document.createElement(\"button\");\n    searchButton.classList.add(\"search-button\");\n    searchButton.type = \"submit\";\n    searchButton.textContent = \"SEARCH\";\n\n    searchBar.appendChild(searchInput);\n    searchBar.appendChild(searchButton);\n\n    const scaleButton = document.createElement(\"button\");\n    scaleButton.classList.add(\"scale-button\");\n    scaleButton.type = \"button\";\n    scaleButton.textContent = \"°C\";\n\n    header.appendChild(headerLogo);\n    header.appendChild(searchBar);\n    header.appendChild(scaleButton);\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://weatherapp/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n// webpack entry point\n\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\nconst API_KEY = \"70e3cf7304a74cf9955191438243103\";\nconst URL = \"https://api.weatherapi.com/v1/current.json\";\nlet responseJSON = [];\nlet CITY = \"\";\nlet isCelsius = true;\n\nconst resultsCard = document.querySelector(\".results-card\");\nconst city = document.querySelector(\".city\");\nconst regionAndCOuntry = document.querySelector(\".region-and-country\");\nconst icon = document.querySelector(\".icon\");\nconst temperature = document.querySelector(\".temperature\");\nconst feelsLike = document.querySelector(\".feels-like\");\nconst humidity = document.querySelector(\".humidity\");\nconst wind = document.querySelector(\".wind\");\n\nconst searchButton = document.querySelector(\".search-button\");\nconst searchInput = document.querySelector(\".search-input\");\nconst scaleButton = document.querySelector(\".scale-button\");\n\nscaleButton.addEventListener(\"click\", toggleScale);\nsearchButton.addEventListener(\"click\", fetchData);\nsearchInput.addEventListener(\"keydown\", (event) => {\n    if (event.keyCode === 13) fetchData();\n});\n\nasync function fetchData() {\n    if (!searchInput.value) return alert(\"Search input is empty!\");\n    \n    CITY = searchInput.value;\n    const response = await fetch(`${URL}?key=${API_KEY}&q=${CITY}`);\n    responseJSON = await response.json();\n    console.log(responseJSON);\n    populateResultsCard();\n}\n\nfunction populateResultsCard() {\n    city.textContent = responseJSON.location.name;\n    regionAndCOuntry.textContent = `${responseJSON.location.region}, ${responseJSON.location.country}`;\n    icon.src = responseJSON.current.condition.icon;\n    humidity.textContent = `humidity: ${responseJSON.current.humidity}%`;\n    wind.textContent = `wind: ${responseJSON.current.wind_kph} kph`;\n    displayTemperature();\n    resultsCard.style.display = \"flex\";\n}\n\nfunction displayTemperature() {\n    if (isCelsius) {\n        temperature.textContent = `${responseJSON.current.temp_c}°C`;\n        feelsLike.textContent = `feels like: ${responseJSON.current.feelslike_c}°C`;\n    } else {\n        temperature.textContent = `${responseJSON.current.temp_f}°F`;\n        feelsLike.textContent = `feels like: ${responseJSON.current.feelslike_f}°F`;\n    }\n}\n\nfunction toggleScale() {\n    isCelsius = !isCelsius;\n    scaleButton.textContent = isCelsius ? \"°C\" : \"°F\";\n    displayTemperature();\n}\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    \n    const resultsCard = document.createElement(\"div\");\n    resultsCard.classList.add(\"results-card\");\n    \n    const locationSection = document.createElement(\"div\");\n    locationSection.classList.add(\"location-section\");\n\n    const weatherSection = document.createElement(\"div\");\n    weatherSection.classList.add(\"weather-section\");\n\n    const additionalSection = document.createElement(\"div\");\n    additionalSection.classList.add(\"additional-section\");\n\n    const city = document.createElement(\"h1\");\n    city.classList.add(\"city\");\n\n    const regionAndCountry = document.createElement(\"p\");\n    regionAndCountry.classList.add(\"region-and-country\");\n\n    const icon = document.createElement(\"img\");\n    icon.classList.add(\"icon\");\n\n    const temperature = document.createElement(\"h2\");\n    temperature.classList.add(\"temperature\");\n\n    const feelsLike = document.createElement(\"p\");\n    feelsLike.classList.add(\"feels-like\");\n\n    const humidity = document.createElement(\"p\");\n    humidity.classList.add(\"humidity\");\n\n    const wind = document.createElement(\"p\");\n    wind.classList.add(\"wind\");\n\n    locationSection.appendChild(city);\n    locationSection.appendChild(regionAndCountry);\n    weatherSection.appendChild(icon);\n    weatherSection.appendChild(temperature);\n    additionalSection.appendChild(feelsLike);\n    additionalSection.appendChild(humidity);\n    additionalSection.appendChild(wind);\n    resultsCard.appendChild(locationSection);\n    resultsCard.appendChild(weatherSection);\n    resultsCard.appendChild(additionalSection);\n\n    main.appendChild(resultsCard);\n    resultsCard.style.display = \"none\";\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);\n\n//# sourceURL=webpack://weatherapp/./src/main.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\nfunction loadWebsite() {\n    const content = document.querySelector(\"#content\");\n    content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    content.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);\n\n//# sourceURL=webpack://weatherapp/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;