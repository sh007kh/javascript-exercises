const hexGen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");
const color = document.getElementById("value");
const colorTitle = document.getElementById("title");

btn.addEventListener("click", function () {
  const randomNumber = hexGenerator();
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
  color.style.color = randomNumber;
  if (randomNumber == "#ffffff") {
    colorTitle.style.color = "black";
  } else {
    colorTitle.style.color = randomNumber;
  }
});
btnReset.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  color.textContent = "#FFF";
  color.style.color = "white";
  colorTitle.style.color = "";
});

function hexGenerator() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let hexId = Math.floor(Math.random() * hexGen.length);
    hex += hexGen[hexId];
  }
  return hex;
}
