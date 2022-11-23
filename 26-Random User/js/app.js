import get from "../js/getElement.js";
// variables
const URL = "https://randomuser.me/api/";
const submitBtn = get(".btn-submit");
const userImage = get(".card-image");
const userTitle = get(".card-title");
const userValue = get(".card-value");
const btns = [...document.querySelectorAll(".icon")];
// listeners
window.addEventListener("DOMContentLoaded", displayUser);
submitBtn.addEventListener("click", displayUser);
// functions

// get data
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { large: image } = person.picture;
  const { phone, email } = person;
  const { first, last } = person.name;
  const { age } = person.dob;
  const { name, number } = person.location.street;
  const { password } = person.login;
  return {
    image,
    phone,
    email,
    name: `${first} ${last}`,
    address: `${name} ${number}`,
    age,
    password,
  };
}

// display user
async function displayUser() {
  const person = await fetchData(URL);
  userImage.src = person.image;
  userTitle.textContent = `My Name Is`;
  userValue.textContent = person.name;

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.dataset.label;
      userTitle.textContent = `My ${label} Is`;
      userValue.textContent = person[label];
      btns.forEach((item) => {
        if (item !== btn) {
          item.classList.remove("active");
          item.classList.remove("show-icon");
        } else {
          btn.classList.add("active");
          btn.classList.add("show-icon");
        }
      });
    });
  });
}
