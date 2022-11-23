function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`this "${selection}" doesn't exist`);
  }
}

export default getElement;
