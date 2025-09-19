async function fetchWeather(location) {
  const VC_API_EP =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
  const KEY = '3WLSG8VHF6EQ2LXDE6EPYTL7E';
  let apiUrl;
  if (location) {
    if (typeof location === 'object') {
      const { latitue, longitude } = location;
      apiUrl = `${VC_API_EP}${latitue},${longitude}?key=${KEY}`;
    } else if (typeof location === 'string') {
      apiUrl = `${VC_API_EP}${location}?key=${KEY}`;
    } else {
      apiUrl = `${VC_API_EP}multan?key=${KEY}`;
    }
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }
  return null;
}

export default fetchWeather;
