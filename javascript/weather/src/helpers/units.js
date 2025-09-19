const units = {
  tempUnit: '\u00B0F',
  uvUnit: '',
  percentUnit: '%',
  lengthUnit: 'Mi',
  snowDepthUnit: 'cm',
  timeUnit: '',
};

function getWindDirection(degrees) {
  const sector = 45;
  const DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const direction = Math.round(degrees / sector);
  return DIRECTIONS[direction];
}

export { getWindDirection, units };
