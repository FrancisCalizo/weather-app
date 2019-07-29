class Storage {
  constructor() {
    this.city;
    this.countryCode;
    this.defaultCity = "Miami";
    this.defaultCountryCode = "US";
  }

  loadStorage() {
    this.city = localStorage.getItem("city");
    this.countryCode = localStorage.getItem("countryCode");

    if (this.city == null || this.countryCode == null) {
      this.city = this.defaultCity;
      this.countryCode = this.defaultCountryCode;
    }

    this.saveStorage(this.city, this.countryCode);
  }

  saveStorage(city, countryCode) {
    localStorage.setItem("city", city);
    localStorage.setItem("countryCode", countryCode);
  }
}
