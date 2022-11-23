// import
import processData from "./presentData.js";
import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";
import getDrinkId from "./getDrinkId.js";
// variable
const cocktailCenter = getElement(".cocktail-center");
// function
async function showData(url) {
  const drinks = await processData(url);
  if (!drinks || drinks === null) {
    cocktailCenter.innerHTML = `<h2>sorry ! no drinks</h2>`;
  } else {
    cocktailCenter.innerHTML = drinks
      .map((drink) => {
        const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
        return `<a href="./single-drink.html" class="card-link" target="_blank">
          <article class="card" data-id="${id}">
            <img src="${image}" alt="${name}" class="card-image" />
            <h2 class="card-title">${name}</h2>
          </article>
        </a>`;
      })
      .join("");
  }

  getDrinkId();
  hideLoading();
}

export default showData;
