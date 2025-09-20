import 'material-design-icons/iconfont/material-icons.css';
import './style.css';
import fetchWeather from './currentWeather/fetchWeather';
import handleHeader from './helpers/header';
import handleWeather from './currentWeather/handleWeather';

async function startApp() {
  const response = await fetchWeather('london');
  console.log(response);
  handleHeader('london');
  handleWeather(response);
}

startApp();
