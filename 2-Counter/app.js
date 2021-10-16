const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnIncrease = document.querySelector(".increase");
const value = document.getElementById("value");
let counter = 0;

btnDecrease.addEventListener("click", function () {
  counter--;
  value.textContent = counter;
  if (counter == 0) {
    value.style.color = "black";
  } else if (counter < 0) {
    value.style.color = "red";
  }
});
btnReset.addEventListener("click", function () {
  counter = 0;
  value.textContent = counter;
  if (counter == 0) {
    value.style.color = "black";
  }
});
btnIncrease.addEventListener("click", function () {
  counter++;
  value.textContent = counter;
  if (counter == 0) {
    value.style.color = "black";
  } else if (counter > 0) {
    value.style.color = "green";
  }
});
