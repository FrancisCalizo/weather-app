class Storage {
  constructor() {
    this.city = localStorage.getItem('city');
    this.countryCode = localStorage.getItem('countryCode');
  }

  save(city, countryCode) {
    localStorage.setItem('city', city);
    localStorage.setItem('countryCode', countryCode);
  }
}
