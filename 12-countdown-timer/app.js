const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const deadlineFormat = document.querySelectorAll(".deadline-format h4");

const giveAwayDate = new Date(2021, 12, 25, 8, 30, 0);
const year = giveAwayDate.getFullYear();
const month = months[giveAwayDate.getMonth()];
const day = giveAwayDate.getDate();
const weekDay = weekdays[giveAwayDate.getDay()];
const hour = giveAwayDate.getHours();
const minutes = giveAwayDate.getMinutes();
const seconds = giveAwayDate.getSeconds();
giveaway.textContent = `giveaway ends on ${weekDay},${day} ${month} ${year}, ${hour}:${minutes}am `;

const futureTime = giveAwayDate.getTime();

function getRemainingTime() {
  const today = new Date();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMin);
  const seconds = Math.floor((t % oneMin) / 1000);
  values = [days, hours, minutes, seconds];
  // format
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  deadlineFormat.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = ` <h4 class="days">this giveaway is expired</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
