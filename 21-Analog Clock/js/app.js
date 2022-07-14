// variables
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

let countdown;
let secondCounter = 0;
let minutesCounter = 0;
let hourCounter = 0;

function getTime() {
  const seconds = new Date().getSeconds();
  secondCounter = seconds * 6 - 90;

  const minutes = new Date().getMinutes();
  minutesCounter = minutes * 6 - 90;

  let hours = new Date().getHours();
  if (hours > 12) {
    hours -= 12;
  }
  hourCounter = hours * 30 - 90;

  second.style.transform = `rotateZ(${secondCounter}deg)`;
  minute.style.transform = `rotateZ(${minutesCounter}deg)`;
  hour.style.transform = `rotateZ(${hourCounter + minutes / 2}deg)`;
}

function myStartFunction() {
  countdown = setInterval(getTime, 1000);
}
myStartFunction();
