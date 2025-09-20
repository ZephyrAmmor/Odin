function clearElement(elem) {
  if (elem) {
    while (elem.firstChild) {
      elem.firstChild.remove();
    }
  }
}

function createCard(classNames, id, title, unit, value) {
  const card = document.createElement('div');
  const text = document.createElement('div');
  text.textContent = unit ? `${value} ${unit}` : value;
  if (title) {
    const label = document.createElement('div');
    label.className = `label ${classNames}`;
    label.textContent = title;
    card.appendChild(label);
  }
  card.className = `${classNames} card`;
  card.id = id;
  card.append(text);
  return card;
}

export { clearElement, createCard };
