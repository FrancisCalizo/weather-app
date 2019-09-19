class Weather {
  constructor(city, countryCode) {
    this.apiKey = '46bd653e811b0652deef50ac35b587c0';
    this.city = city;
    this.countryCode = countryCode;
    this.units = 'imperial';
  }

  // Fetch Weather from API
  async getWeather() {
    if (this.city === null && this.countryCode === null) {
      this.city = 'miami';
      this.countryCode = 'US';
    }

    const promise = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=${this.units}&APPID=${this.apiKey}`
    );

    const data = await promise.json();

    return data;
  }

  // Change Weather Location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
