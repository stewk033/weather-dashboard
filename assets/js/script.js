
// variable declarations
var locationFormEl = document.querySelector("#location-form");
var nameInputEl = document.querySelector("#location");
var weatherContainerEl = document.querySelector("#weather-container");
var locationSearchTerm = document.querySelector("#weather-search-term");
var temperature = document.querySelector('#temperature');
var humidity = document.querySelector('#humidity');
var windSpeed = document.querySelector('#wind-speed');
var uvIndex = document.querySelector('#uv-index');
var forecast = document.querySelectorAll('.forecast');
var savedSearches = document.querySelector("#savedSearches");


var formSubmitHandler = function(event) {
    event.preventDefault();
        // get value from input element
        var location = nameInputEl.value.trim();
        // alert if no value entered
        if (location) {
        getWeather(location);
        nameInputEl.value = "";
        } else {
        alert("Please enter the name of a city");
        }
    console.log(event);
}

// recording recent searches
var searches = JSON.parse(localStorage.getItem("RecentSearches"))
console.log(searches)
    if (searches) {
        savedSearches.appendChild(document.createElement("select"))
        for (var i = 0; i < searches.length; i++) {
            var option = document.createElement("option")
            option.value = searches[i]
            option.textContent = searches[i]
            savedSearches.lastChild.addEventListener("change", () => {
                getWeather(savedSearches.lastChild.value)
            })
            savedSearches.lastChild.appendChild(option)
        }
    }


locationFormEl.addEventListener("submit", formSubmitHandler);