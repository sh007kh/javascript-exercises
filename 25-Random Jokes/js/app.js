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

  getData(url)
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

// select
categories.addEventListener("change", () => {
  searchBox.value = "";
});

// functions -------------

// show categories
getCategory()
  .then((response) => {
    displayCategory(response);
  })
  .catch((err) => console.log(err));

// get data
function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState < 4) {
        return;
      }
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };
  });
}

// get categories for select
function getCategory() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/categories";
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState < 4) {
        return;
      }
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };
  });
}

// display categories
function displayCategory(data) {
  const response = JSON.parse(data);
  const selection = response
    .map((item) => {
      return `<option value="${item}">${item}</option>`;
    })
    .join("");
  categories.innerHTML += selection;
}

// display data
function displayData(data) {
  const response = JSON.parse(data);
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
