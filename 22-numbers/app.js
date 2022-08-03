// variables
const numbers = [...document.querySelectorAll(".number")];
const circles = [...document.querySelectorAll(".progress-bar")];

// increment numbers
numbers.forEach((number) => {
  const initialValue = number.dataset.value;
  let currValue = parseInt(number.textContent);
  const incrementValue = Math.ceil(initialValue / 200);
  const counter = setInterval(() => {
    currValue += incrementValue;
    number.textContent = `${currValue}+`;
    if (currValue > initialValue) {
      number.textContent = `${initialValue}+`;
      clearInterval(counter);
    }
  }, 5);
});

// increment width of progressbar
const colors1 = ["orange", "lightseagreen", "#221E22"];
const colors2 = ["yellow", "cyan", "#4E4E4E"];
const colors3 = ["lightgreen", "dodgerblue", "#B8B8B8"];
const colors4 = ["green", "teal", "#257D00"];

circles.forEach((circle, index) => {
  circle.style = `background: radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg 0deg, gainsboro 0deg 360deg),
    conic-gradient(${colors1[index]} 0deg, ${colors2[index]} 90deg, ${colors3[index]} 180deg, ${colors4[index]});`;

  let deg = 0;
  const counter = setInterval(() => {
    deg += 2;
    circle.style = `background: radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${deg}deg, gainsboro ${deg}deg 360deg),
    conic-gradient(${colors1[index]} 0deg, ${colors2[index]} 90deg, ${colors3[index]} 180deg, ${colors4[index]});`;
    if (deg === 360) {
      clearInterval(counter);
    }
  }, 1);
});
