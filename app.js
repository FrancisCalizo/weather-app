// Init Local Storage Object
const storage = new Storage();

// Init Weather Object
const weather = new Weather(
  localStorage.getItem('city'),
  localStorage.getItem('countryCode')
);

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
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('country-code').value;

  weather.changeLocation(city, countryCode);

  weather
    .getWeather()
    .then(weatherData => {
      ui.display(weatherData);
    })
    .catch(err => console.log(err));

  // e.preventDefault();
});
