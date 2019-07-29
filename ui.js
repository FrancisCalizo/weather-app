class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.description = document.getElementById("w-description");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.max = document.getElementById("w-max");
    this.min = document.getElementById("w-min");
    this.humidity = document.getElementById("w-humidity");
    this.wind = document.getElementById("w-wind");
    this.windDirection;
  }

  display(weatherData) {
    this.location.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    this.description.innerHTML = `${weatherData.weather[0].main}`;
    this.string.innerHTML = `${parseInt(weatherData.main.temp)} F`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    );
    this.humidity.innerHTML = `Relative Humidity: ${weatherData.main.humidity}`;
    this.max.innerHTML = `High: ${weatherData.main.temp_max} F`;
    this.min.innerHTML = `Low: ${weatherData.main.temp_min} F`;

    // Get Wind Direction
    switch (true) {
      case weatherData.wind.deg <= 30 || weatherData.wind.deg >= 331:
        this.windDirection = "N";
        break;
      case weatherData.wind.deg <= 75:
        this.windDirection = "NE";
        break;
      case weatherData.wind.deg <= 105:
        this.windDirection = "E";
        break;
      case weatherData.wind.deg <= 150:
        this.windDirection = "SE";
        break;
      case weatherData.wind.deg <= 195:
        this.windDirection = "S";
        break;
      case weatherData.wind.deg <= 240:
        this.windDirection = "SW";
        break;
      case weatherData.wind.deg <= 285:
        this.windDirection = "W";
        break;
      case weatherData.wind.deg <= 330:
        this.windDirection = "NW";
        break;
    }

    this.wind.innerHTML = `Wind: From the ${this.windDirection} gusting at ${
      weatherData.wind.speed
    } MPH`;
  }

  showError() {
    const errorParent = document.querySelector(".rounded");

    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = "Unable to find location";
    errorParent.insertBefore(div, errorParent.firstChild);

    // Remove Error after 3 Seconds
    setTimeout(() => {
      errorParent.removeChild(errorParent.firstElementChild);
    }, 3000);
  }

  clearInputs() {
    document.getElementById("city").value = "";
    document.getElementById("country-code").value = "";
  }
}
