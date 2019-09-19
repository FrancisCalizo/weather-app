class Weather {
  constructor(city, countryCode) {
    this.apiKey = '46bd653e811b0652deef50ac35b587c0';
    this.city = city;
    this.countryCode = countryCode;
    this.units = 'imperial';
  }

  // Fetch Weather from API
  async getWeather() {
    const promise = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=${this.units}&APPID=${this.apiKey}`
    );

    if (promise.status == 200) {
      const data = await promise.json();
      return data;
    }
  }

  // Change Weather Location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
