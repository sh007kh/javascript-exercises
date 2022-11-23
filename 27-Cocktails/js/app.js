// imports
import getElement from "./utils/getElement.js";
import showData from "./utils/showData.js";
import { showLoading } from "./utils/toggleLoading.js";

// variables

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const form = getElement(".search-form");
const input = getElement(".search-input");

// listeners
window.addEventListener("DOMContentLoaded", showData(URL));

form.addEventListener("keyup", searchData);

// function

// show drinks after search
function searchData() {
  showLoading();
  const value = input.value;
  if (value) {
    let url = ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    showData(url);
  } else if (!value) {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
    showData(url);
  }
}
