import renderWeather from './renderWeather';

let validInterval;
function startInterval(data) {
  validInterval = setInterval(() => {
    renderWeather(data);
  }, 1000);
}

function updateInterval(data) {
  clearInterval(validInterval);
  startInterval(data);
}
function handleWeather(data) {
  renderWeather(data);
  updateInterval(data);
}

export default handleWeather;
