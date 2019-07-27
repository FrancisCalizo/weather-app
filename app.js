// Init Weather Object
const weather = new Weather('Miami', 'US');

weather
  .getWeather()
  .then(data => console.log(data))
  .catch(err => console.log(err));
