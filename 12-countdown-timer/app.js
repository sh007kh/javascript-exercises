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

const giveAwayDate = new Date(2022, 4, 25, 11, 30, 0);
console.log(giveAwayDate);
const year = giveAwayDate.getFullYear();
const month = months[giveAwayDate.getMonth()];
const day = giveAwayDate.getDate();
const weekDay = weekdays[giveAwayDate.getDay()];
const hour = giveAwayDate.getHours();
const minutes = giveAwayDate.getMinutes();
const seconds = giveAwayDate.getSeconds();
console.log(seconds);
giveaway.textContent = `giveaway ends on ${weekDay},${day} ${month} ${year}, ${hour}:${minutes}am `;
