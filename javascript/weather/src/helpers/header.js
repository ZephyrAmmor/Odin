import fetchWeather from '../currentWeather/fetchWeather';
import handleWeather from '../currentWeather/handleWeather';
import { clearElement } from './components';

async function getWeather(location) {
  const response = await fetchWeather(location);
  handleWeather(response);
}

function renderHeader(local) {
  const header = document.querySelector('.header');
  clearElement(header);
  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar');
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'search');
  searchInput.classList.add('search-input');
  const searchBtn = document.createElement('button');
  searchBtn.className = 'search-btn material-icons';
  searchBtn.textContent = 'search';
  searchBar.append(searchInput, searchBtn);
  const city = document.createElement('div');
  city.classList.add('city-name');
  city.textContent = local;
  header.append(city, searchBar);
}

function handleHeader(local) {
  renderHeader(local);
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('.search-input');
    const location = searchInput.value;
    handleHeader(location);
    getWeather(location);
  });
}
export default handleHeader;
