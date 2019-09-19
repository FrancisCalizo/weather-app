// Init Storage Obj
const storage = new Storage();
// Get Location From Storage
storage.loadStorage();
// Init Weather Object
const weather = new Weather(storage.city, storage.countryCode);
// Init UI Object
const ui = new UI();

// Get Weather onLoad
window.addEventListener('load', () => {
  weather
    .getWeather()
    .then(weatherData => {
      // console.log(weatherData);
      ui.display(weatherData);
    })
    .catch(err => console.log(err));
});

// Get Modal Form Submission
document.getElementById('w-change-btn').addEventListener('click', e => {
  let city = document.getElementById('city').value;
  let countryCode = document.getElementById('country-code').value;

  if (city !== '' && countryCode !== '') {
    weather.changeLocation(city, countryCode);

    weather
      .getWeather()
      .then(weatherData => {
        ui.display(weatherData);
        storage.saveStorage(city, countryCode);
      })
      .catch(err => {
        console.log(err);
        ui.showError();
      });
  }

  ui.clearInputs();
});
