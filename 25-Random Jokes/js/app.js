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
form.addEventListener("submit", async (e) => {
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
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
});

// select
categories.addEventListener("change", () => {
  searchBox.value = "";
});

// functions -------------

// get categories for select
async function getCategory() {
  try {
    const url = "https://api.chucknorris.io/jokes/categories";
    const response = await fetch(url);
    const data = await response.json();
    displayCategory(data);
  } catch (error) {
    console.log(error);
  }
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
