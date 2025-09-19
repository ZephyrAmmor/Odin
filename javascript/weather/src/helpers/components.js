function clearElement(elem) {
  if (elem) {
    while (elem.firstChild) {
      elem.firstChild.remove();
    }
  }
}

function createCard(classNames, id, unit, value) {
  const card = document.createElement('div');
  card.className = `${classNames} card`;
  card.id = id;
  card.textContent = unit ? `${value} ${unit}` : value;
  return card;
}

export { clearElement, createCard };
