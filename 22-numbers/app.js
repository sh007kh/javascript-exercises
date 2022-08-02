// variables
const numbers = [...document.querySelectorAll(".number")];
const underlines = [...document.querySelectorAll(".underline")];

// increment numbers
numbers.forEach((number) => {
  const initialValue = number.dataset.value;
  let currValue = parseInt(number.textContent);
  const incrementValue = Math.ceil(initialValue / 250);
  const counter = setInterval(() => {
    currValue += incrementValue;
    number.textContent = `${currValue}+`;
    if (currValue > initialValue) {
      number.textContent = `${initialValue}+`;
      clearInterval(counter);
    }
  }, 5);
});

// increment width of text underline
underlines.forEach((underline) => {
  const initialWidth = Math.floor(underline.getBoundingClientRect().width);
  let currWidth = 0;
  const incrementWidth = Math.ceil(initialWidth / 500);
  const counter = setInterval(() => {
    currWidth += incrementWidth;
    underline.style.width = `${currWidth}px`;
    if (currWidth > initialWidth) {
      underline.style.width = `${initialWidth}px`;
      clearInterval(counter);
    }
  }, 5);
});
