// api -------------
let url = "https://api.chucknorris.io/jokes/random";
// variables -------------
const jokeCenter = document.querySelector(".joke-center");
const jokeImage = document.querySelector(".joke-img");
const jokeText = document.querySelector(".joke-text");
const categories = document.querySelector("#joke-category");
const searchBox = document.querySelector(".joke-search");
const form = document.querySelector(".form-joke");

// listeners -------------

// form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  shakeImage();
  const categoryValue = categories.value;
  const searchValue = searchBox.value;
  const urlByCategory = `https://api.chucknorris.io/jokes/random?category=${categoryValue}`;

  if (searchBox.value === "") {
    categoryValue === "select" ? url : (url = urlByCategory);
  } else {
    const urlByKeyword = `https://api.chucknorris.io/jokes/search?query=${searchValue}`;
    url = urlByKeyword;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
});

// select
categories.addEventListener("change", () => {
  searchBox.value = "";
});

// functions -------------

// get categories for select
function getCategory() {
  const url = "https://api.chucknorris.io/jokes/categories";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCategory(data))
    .catch((err) => console.log(err));
}
getCategory();

// display categories
function displayCategory(data) {
  const selection = data
    .map((item) => {
      return `<option value="${item}">${item}</option>`;
    })
    .join("");
  categories.innerHTML += selection;
}

// display data
function displayData(data) {
  const response = data;
  // for search method, it returns multiple objects
  const responseArr = response.result;
  const value = responseArr
    ? responseArr[randomNumer(responseArr)].value
    : response.value;
  jokeText.textContent = value;
}
// shaking main image when clicked
function shakeImage() {
  jokeImage.classList.add("shake-img");
  const randomTime = Math.random() * 1000;
  setTimeout(() => {
    jokeImage.classList.remove("shake-img");
  }, randomTime);
}
// random number for search response
function randomNumer(arr) {
  return (random = Math.floor(Math.random() * (arr.length - 1)));
}
