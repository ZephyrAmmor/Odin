import { clearElement, createCard } from '../helpers/components';
import { units, getWindDirection } from '../helpers/units';

const {
  tempUnit,
  uvUnit,
  percentUnit,
  lengthUnit,
  snowdepthUnit,
  timeUnit,
  dewUnit,
} = units;
function renderWeather(data) {
  const container = document.querySelector('.container');
  clearElement(container);

  const today = new Date();
  const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month =
    today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth();
  const year = today.getFullYear();
  const dateValue = `${date} : ${month} : ${year}`;
  const dateCard = createCard('date', 'date-card', 'Date', '', dateValue);
  const hours =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const seconds =
    today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
  const time = `${hours} : ${minutes} : ${seconds}`;
  const timeCard = createCard('time', 'time-card', 'Time', '', time);

  const { days, currentConditions } = data;
  const {
    temp,
    uvindex,
    feelslike,
    precip,
    windspeed,
    winddir,
    conditions,
    snowdepth,
    cloudcover,
    humidity,
    dew,
  } = currentConditions;
  const {
    tempmin,
    tempmax,
    feelslikemin,
    feelslikemax,
    windgust,
    visibility,
    sunrise,
    sunset,
    description,
    precipprob,
  } = days[0];

  const tempCard = createCard('temp', 'temp-card', 'Temp', tempUnit, temp);
  const uvindexCard = createCard(
    'uvindex',
    'uvindex-card',
    'UV Index',
    uvUnit,
    uvindex,
  );
  const feelsLikeCard = createCard(
    'feelslike',
    'feelslike-card',
    'Feels Like',
    tempUnit,
    feelslike,
  );
  const precipCard = createCard(
    'precip',
    'precip-card',
    'Rain or Snow',
    percentUnit,
    precip,
  );
  const windspeedCard = createCard(
    'windspeed',
    'windspeed-card',
    'Wind Speed',
    lengthUnit,
    windspeed,
  );
  const winddirCard = createCard(
    'winddir',
    'winddir-card',
    'Wind Direction',
    '',
    getWindDirection(winddir),
  );
  const conditionsCard = createCard(
    'conditions',
    'conditions-card',
    'Conditions',
    '',
    conditions,
  );
  const snowdepthCard = createCard(
    'snowdepth',
    'snowdepth-card',
    'Snow Depth',
    snowdepthUnit,
    snowdepth,
  );
  const cloudcoverCard = createCard(
    'cloudcover',
    'cloudcover-card',
    'Cloud Cover',
    percentUnit,
    cloudcover,
  );
  const humidityCard = createCard(
    'humidity',
    'humidity-card',
    'Humidity',
    percentUnit,
    humidity,
  );
  const dewCard = createCard('dew', 'dew-card', 'Dew', dewUnit, dew);
  const tempmaxCard = createCard(
    'tempmax',
    'tempmax-card',
    'Max Temp',
    tempUnit,
    tempmax,
  );
  const tempminCard = createCard(
    'tempmin',
    'tempmin-card',
    'Min Temp',
    tempUnit,
    tempmin,
  );
  const feelslikemaxCard = createCard(
    'feelslikemax',
    'feelslikemax-card',
    'Max Feels Like',
    tempUnit,
    feelslikemax,
  );
  const feelslikeminCard = createCard(
    'feelslikemin',
    'feelslikemin-card',
    'Min Feels Like',
    tempUnit,
    feelslikemin,
  );
  const windgustCard = createCard(
    'windgust',
    'windgust-card',
    'Wind Gust',
    lengthUnit,
    windgust,
  );
  const visibilityCard = createCard(
    'visibility',
    'visibility-card',
    'Visibility',
    lengthUnit,
    visibility,
  );
  const sunriseCard = createCard(
    'sunrise',
    'sunrise-card',
    'Sunrise',
    timeUnit,
    sunrise,
  );
  const sunsetCard = createCard(
    'sunset',
    'sunset-card',
    'Sunset',
    timeUnit,
    sunset,
  );
  const descriptionCard = createCard(
    'description',
    'description-card',
    'Description',
    '',
    description,
  );
  const precipprobCard = createCard(
    'precipprob',
    'precipprop-card',
    'Rain or Snow Chances',
    percentUnit,
    precipprob,
  );

  const tempFullCard = createCard('temp-full', 'temp-full-card', '', '');
  const minMaxFeelsLike = createCard(
    'minmax-feelslike',
    'minmax-feelslike-card',
    '',
    '',
    '',
  );
  const minMaxTemp = createCard('minmax-temp', 'minmax-temp-card', '', '', '');
  const windCard = createCard('wind', 'wind-card', '', '', '');
  const cloudsCard = createCard('clouds', 'clouds-card', '', '', '');
  const moistureCard = createCard('moisture', 'moisture-card', '', '', '');
  const additionalInfoCard = createCard(
    'additional-info',
    'additional-info-card',
    '',
    '',
  );

  const dateTimeCard = createCard('date-time', 'date-time-card', '', '', '');
  const sunCard = createCard('sun', 'sun-card', '', '', '');

  minMaxFeelsLike.append(feelslikeminCard, feelslikemaxCard);
  minMaxTemp.append(tempminCard, tempmaxCard);
  windCard.append(windspeedCard, windgustCard, winddirCard);
  cloudsCard.append(precipCard, precipprobCard, snowdepthCard, cloudcoverCard);
  moistureCard.append(humidityCard, dewCard);
  additionalInfoCard.append(uvindexCard, visibilityCard);

  sunCard.append(sunriseCard, sunsetCard);
  dateTimeCard.append(dateCard, timeCard);

  tempFullCard.append(tempCard, minMaxTemp, feelsLikeCard, minMaxFeelsLike);

  const leftSidebar = createCard(
    'left-sidebar',
    'left-sidebar-card',
    '',
    '',
    '',
  );
  leftSidebar.append(dateTimeCard, sunCard, conditionsCard);

  const centralView = createCard(
    'central-view',
    'central-view-card',
    '',
    '',
    '',
  );
  centralView.append(
    tempFullCard,
    windCard,
    cloudsCard,
    moistureCard,
    additionalInfoCard,
    descriptionCard,
  );

  container.append(leftSidebar, centralView);
}

export default renderWeather;
