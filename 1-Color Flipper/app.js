const colors = ["white", "green", "blue", "red"];
const btn = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");
const color = document.getElementById("value");
const colorTitle = document.getElementById("title");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
  if (colors[randomNumber] == "white") {
    colorTitle.style.color = "black";
  } else {
    colorTitle.style.color = colors[randomNumber];
  }
});
btnReset.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  color.textContent = "white";
  color.style.color = "white";
  colorTitle.style.color = "";
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
