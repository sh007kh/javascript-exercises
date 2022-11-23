import getElement from "./utils/getElement.js";
import processData from "./utils/presentData.js";
import { hideLoading } from "./utils/toggleLoading.js";

// variables
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const cocktailCenter = getElement(".section-center");

// listener
window.addEventListener("DOMContentLoaded", showDrink);

// function
// display drink
async function showDrink() {
  const id = localStorage.getItem("drink");
  const drinkArray = await processData(`${baseUrl}${id}`);
  const drink = drinkArray[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;

  // get ingredients from api
  const list = [];
  for (let key of Object.keys(drink)) {
    if (key.includes("strIngredient")) {
      if (drink[key] !== null) {
        list.push(drink[key]);
      }
    }
  }

  const ingredient = list
    .map((item) => {
      if (item !== null) {
        return `<li class="ingredient">
      <i class="far fa-check-square"></i>
      <span class="ingredient-text"> ${item}</span>
      </li>`;
      } else {
        return;
      }
    })
    .join("");

  cocktailCenter.innerHTML = `<article class="single-card" data-id="${id}">
          <img src="${image}" alt="${name}" class="single-card-image" />
          <div class="single-card-info">
          <h2 class="single-card-title">${name}</h2>
          <p class="single-card-desc">${desc}</p>
          <ul class="single-card-ingredients">
          ${ingredient}
          </ul>
          </div>
        </article>`;
  hideLoading();
}
