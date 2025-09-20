function clearElement(elem) {
  if (elem) {
    while (elem.firstChild) {
      elem.firstChild.remove();
    }
  }
}

function createCard(classNames, id, title, unit, value) {
  const card = document.createElement('div');
  const label = document.createElement('div');
  const text = document.createElement('div');
  text.textContent = unit ? `${value} ${unit}` : value;
  label.classList.add(`label-of${classNames}`);
  label.textContent = title;
  card.className = `${classNames} card`;
  card.id = id;
  card.append(title, text);
  return card;
}

export { clearElement, createCard };
