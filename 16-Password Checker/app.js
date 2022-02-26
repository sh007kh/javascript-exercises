// ****** SELECT ITEMS **********
const loginForm = document.querySelector(".login");
const signUpForm = document.querySelector(".sign-up");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.querySelector(".submit-btn");
const alert = document.querySelector(".alert");
const alertContainer = document.querySelector(".alert-container");
const signUpBtns = document.querySelectorAll(".sign-up-btn");
const formCenter = document.querySelector(".form-center");

// edit option

// ****** EVENT LISTENERS **********
window.addEventListener("DOMContentLoaded", setupItems);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameHolder = this.username.value;
  console.log(`username is ${usernameHolder}`);
  const passwordHolder = this.password.value;
  console.log(`password is ${passwordHolder}`);
  if (validateLocalStorage(usernameHolder, passwordHolder)) {
    alertStore(processAlert("successfully signed in ", "green"));
  } else {
    console.log("error");
  }
  alertContainer.innerHTML = alertArray.join("");
  setToDefault();
});
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("clicked");
  const usernameHolder = this.username.value;
  console.log(`username is ${usernameHolder}`);
  const emailHolder = this.email.value;
  console.log(`email is ${emailHolder}`);
  const passwordHolder = this.password.value;
  console.log(`password is ${passwordHolder}`);
  // checkLocalStorage(usernameHolder, passwordHolder);
  if (checkLocalStorage(usernameHolder, emailHolder)) {
    console.log("username already existed ");
  } else if (checkEmailLocalStorage(emailHolder)) {
    console.log("email already existed ");
  } else if (passwordHolder.includes(usernameHolder)) {
    alertStore(processAlert("password should not contain 'username'", "red"));
  } else if (passwordHolder.includes(" ")) {
    alertStore(processAlert("password should not contain space", "red"));
  } else if (passwordHolder.length < 8) {
    alertStore(processAlert("password should be at least 8 character", "red"));
  } else if (!hasLowerCase(passwordHolder)) {
    alertStore(processAlert("password should contain lowercase", "red"));
  } else if (!hasUpperCase(passwordHolder)) {
    alertStore(processAlert("password should contain uppercase", "red"));
  } else if (!hasNumber(passwordHolder)) {
    alertStore(
      processAlert("password should contain at least a number", "red")
    );
  } else {
    addToLocalStorage(usernameHolder, passwordHolder, emailHolder);
    alertStore(processAlert("your sign up completed succsefully ", "green"));
  }
  signUpForm.querySelector(".alert-container").innerHTML = alertArray.join("");
  setToDefault();
});

// signup button
signUpBtns.forEach(function (signUpBtn) {
  signUpBtn.addEventListener("click", function () {
    formCenter.classList.toggle("form-rotate");
  });
});
// ****** FUNCTIONS **********
function setToDefault() {
  alertArray = [];
  // this.username.value = "";
  // this.password.value = "";
}
function hasLowerCase(str) {
  return str.toUpperCase() != str;
}
function hasUpperCase(str) {
  return str.toLowerCase() != str;
}
function hasNumber(str) {
  return /\d/.test(str);
}
// display alert
function processAlert(text, item) {
  return `<p class="alert alert-${item}">${text}</p>`;
}
let alertArray = [];
function alertStore(processAlert) {
  alertArray.push(processAlert);
}

// ****** LOCAL STORAGE **********
// add to local storage
function addToLocalStorage(username, password, email) {
  const user = { username, password, email };
  let items = getFromLocalStorage();
  items.push(user);
  localStorage.setItem("list", JSON.stringify(items));
}

function getFromLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function checkLocalStorage(username, email) {
  const user = { username, email };
  let items = getFromLocalStorage();
  items = items.find(function (item) {
    if (item.username === username) {
      return item;
    }
  });
  if (items) {
    alertStore(processAlert("username already existed ", "red"));
    return true;
  }
}
function checkEmailLocalStorage(email) {
  let items = getFromLocalStorage();
  items = items.find(function (item) {
    if (item.email === email) {
      return item;
    }
  });
  if (items) {
    alertStore(
      processAlert(
        "this email already existed sign in with your account",
        "red"
      )
    );
    return true;
  }
}

function validateLocalStorage(username, password) {
  if (checkLocalStorage(username, password)) {
    console.log(username, "is existed");
    items = items.find(function (item) {
      if (item.password === password) {
        return item;
      }
    });
    console.log(items);
    if (items) {
      return true;
    } else {
      alertStore(processAlert("your password is not correct ", "red"));
    }
  } else {
    alertStore(
      processAlert("this username doesn't exist , please sign up", "red")
    );
  }
}
// ****** SETUP ITEMS **********
function setupItems() {
  return (items = getFromLocalStorage());
}
