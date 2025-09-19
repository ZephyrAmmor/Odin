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
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const dateValue = `${date} : ${month} : ${year}`;
  const dateCard = createCard('date', 'date-card', '', dateValue);
  const time = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
  const timeCard = createCard('time', 'time-card', '', time);

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

  const tempCard = createCard('temp', 'temp-card', tempUnit, temp);
  const uvindexCard = createCard('uvindex', 'uvindex-card', uvUnit, uvindex);
  const feelsLikeCard = createCard(
    'feelslike',
    'feelslike-card',
    tempUnit,
    feelslike,
  );
  const precipCard = createCard('precip', 'precip-card', percentUnit, precip);
  const windspeedCard = createCard(
    'windspeed',
    'windspeed-card',
    lengthUnit,
    windspeed,
  );
  const winddirCard = createCard(
    'winddir',
    'winddir-card',
    '',
    getWindDirection(winddir),
  );
  const conditionsCard = createCard(
    'conditions',
    'conditions-card',
    '',
    conditions,
  );
  const snowdepthCard = createCard(
    'snowdepth',
    'snowdepth-card',
    snowdepthUnit,
    snowdepth,
  );
  const cloudcoverCard = createCard(
    'cloudcover',
    'cloudcover-card',
    percentUnit,
    cloudcover,
  );
  const humidityCard = createCard(
    'humidity',
    'humidity-card',
    percentUnit,
    humidity,
  );
  const dewCard = createCard('dew', 'dew-card', dewUnit, dew);
  const tempmaxCard = createCard('tempmax', 'tempmax-card', tempUnit, tempmax);
  const tempminCard = createCard('tempmin', 'tempmin-card', tempUnit, tempmin);
  const feelslikemaxCard = createCard(
    'feelslikemax',
    'feelslikemax-card',
    tempUnit,
    feelslikemax,
  );
  const feelslikeminCard = createCard(
    'feelslikemin',
    'feelslikemin-card',
    tempUnit,
    feelslikemin,
  );
  const windgustCard = createCard(
    'windgust',
    'windgust-card',
    lengthUnit,
    windgust,
  );
  const visibilityCard = createCard(
    'visibility',
    'visibility-card',
    lengthUnit,
    visibility,
  );
  const sunriseCard = createCard('sunrise', 'sunrise-card', timeUnit, sunrise);
  const sunsetCard = createCard('sunset', 'sunset-card', timeUnit, sunset);
  const descriptionCard = createCard(
    'description',
    'description-card',
    '',
    description,
  );
  const precipprobCard = createCard(
    'precipprob',
    'precipprop-card',
    percentUnit,
    precipprob,
  );

  const tempFullCard = createCard('temp-full', 'temp-full-card', '', '');
  const minMaxFeelsLike = createCard(
    'minmax-feelslike',
    'minmax-feelslike-card',
    '',
    '',
  );
  const minMaxTemp = createCard('minmax-temp', 'minmax-temp-card', '', '');
  const windCard = createCard('wind', 'wind-card', '', '');
  const cloudsCard = createCard('clouds', 'clouds-card', '', '');
  const moistureCard = createCard('moisture', 'moisture-card', '', '');
  const additionalInfoCard = createCard(
    'additional-info',
    'additional-info-card',
    '',
    '',
  );

  const dateTimeCard = createCard('date-time', 'date-time-card', '', '');
  const sunCard = createCard('sun', 'sun-card', '', '');

  minMaxFeelsLike.append(feelslikeminCard, feelslikemaxCard);
  minMaxTemp.append(tempminCard, tempmaxCard);
  windCard.append(windspeedCard, windgustCard, winddirCard);
  cloudsCard.append(precipCard, precipprobCard, snowdepthCard, cloudcoverCard);
  moistureCard.append(humidityCard, dewCard);
  additionalInfoCard.append(uvindexCard, visibilityCard);

  sunCard.append(sunriseCard, sunsetCard);
  dateTimeCard.append(dateCard, timeCard);

  tempFullCard.append(tempCard, minMaxTemp, feelsLikeCard, minMaxFeelsLike);

  const leftSidebar = createCard('left-sidebar', 'left-sidebar-card', '', '');
  leftSidebar.append(dateTimeCard, sunCard, conditionsCard);

  const centralView = createCard('central-view', 'central-view-card', '', '');
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
