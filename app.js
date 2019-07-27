// Init Weather Object
const weather = new Weather('Miami', 'US');
// Init UI Object
const ui = new UI();

// Get Weather onLoad

window.addEventListener('load', () => {
  weather
    .getWeather()
    .then(weatherData => {
      console.log(weatherData);
      ui.display(weatherData);
    })
    .catch(err => console.log(err));
});
