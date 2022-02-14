// ****** SELECT ITEMS **********
const form = document.querySelector(".login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.querySelector(".submit-btn");
const alert = document.querySelector(".alert");
const alertContainer = document.querySelector(".alert-container");

// edit option

// ****** EVENT LISTENERS **********
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameHolder = username.value;
  console.log(`username is ${usernameHolder}`);
  const passwordHolder = password.value;
  console.log(`password is ${passwordHolder}`);
  if (passwordHolder.includes(" ")) {
    alertStore(processAlert("password should not contain space", "red"));
  }
  if (passwordHolder.includes("usernameHolder")) {
    alertStore("password should not contain space", "red");
  }
  if (passwordHolder.length < 8) {
    alertStore(processAlert("password should be at least 8 character", "red"));
  }
  if (!hasLowerCase(passwordHolder)) {
  }
  if (!hasUpperCase(passwordHolder)) {
    alertStore(processAlert("password should contain uppercase", "red"));
  }
  alertContainer.innerHTML = alertArray.join("");
});
// ****** FUNCTIONS **********
function hasLowerCase(str) {
  return str.toUpperCase() != str;
}
function hasUpperCase(str) {
  return str.toLowerCase() != str;
}

// display alert
function processAlert(text, item) {
  return `<p class="alert alert-${item}">${text}</p>`;
}
let alertArray = [];
function alertStore(processAlert) {
  alertArray.push(processAlert);
}

console.log("alertArray", alertArray);

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
