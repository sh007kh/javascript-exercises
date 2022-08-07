// selecting elements in app.js
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`"this ${element} doesn't exist"`);
  }
}

export default getElement;
