// api -------------
const url = "https://api.chucknorris.io/jokes/random";
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
    categoryValue === "select" ? getData(url) : getData(urlByCategory);
  } else {
    const urlByKeyword = `https://api.chucknorris.io/jokes/search?query=${searchValue}`;
    getData(urlByKeyword);
  }
});

// select
categories.addEventListener("change", () => {
  searchBox.value = "";
  console.log(categories.value);
});

// functions -------------

// get data
function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.status !== 200) {
      return;
    }
    const response = JSON.parse(xhr.responseText);
    // for search method, it returns multiple objects
    const responseArr = response.result;
    const value = responseArr
      ? responseArr[randomNumer(responseArr)].value
      : response.value;
    jokeText.textContent = value;
    return value;
  };
}
// get categories for select
function getCategory() {
  const url = "https://api.chucknorris.io/jokes/categories";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.status !== 200) {
      return;
    }
    const response = JSON.parse(xhr.responseText);
    const selection = response
      .map((item) => {
        return `<option value="${item}">${item}</option>`;
      })
      .join("");
    categories.innerHTML += selection;
  };
}
getCategory();

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
