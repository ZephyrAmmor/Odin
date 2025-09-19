function clearElement(elem) {
  if (elem) {
    while (elem.firstChild) {
      elem.firstChild.remove();
    }
  }
}

export { clearElement };