// variables
let filteredProducts = [...products];
let filteredItems = [...filteredProducts];

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const productContainer = document.querySelector(".products-container");
const filterBtnContainer = document.querySelector(".btn-container");
const clearBtn = document.querySelector(".clear-btn");

// listeners

// search filter
form.addEventListener("keyup", () => {
  let searchValue = input.value;
  if (searchValue !== "") {
    clearBtn.classList.add("show-clear-btn");
  } else {
    clearBtn.classList.remove("show-clear-btn");
  }
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  displayFilterBtns();

  displayProducts();
});

// search clear btn
clearBtn.addEventListener("click", () => {
  input.value = "";
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(input.value.toLowerCase());
  });
  displayFilterBtns();
  displayProducts();
  clearBtn.classList.remove("show-clear-btn");
});

// functions

// show products
function displayProducts() {
  productContainer.innerHTML = filteredProducts
    .map((item) => {
      return `<article class="product" data-company="${item.company}" id="${item.id}">
    <img
    src=${item.image}
    alt="${item.title}"
    class="product-img img"
    />
    <h4 class="product-title">${item.title}</h4>
    <span class="product-price">${item.price}$</span>
    </article>`;
    })
    .join("");
}

displayProducts();

//show filter buttons
function displayFilterBtns() {
  const companyNumbers = filteredProducts.map((product) => {
    return product.company;
  });
  const numberOfItems = companyNumbers.reduce((amount, item) => {
    amount[item] = (amount[item] || 0) + 1;
    return amount;
  }, {});
  const company = [
    "all",
    ...new Set(
      filteredProducts.map((product) => {
        return product.company;
      })
    ),
  ];
  filterBtnContainer.innerHTML = company
    .map((id) => {
      if (input.value === "") {
        return `<button class="btn filter-btn" type="button" data-id="${id}">
              ${id}
            </button>`;
      } else {
        return `<button class="btn filter-btn" type="button" data-id="${id}">
                ${id} ${
          numberOfItems[id] !== undefined ? `(${numberOfItems[id]})` : ""
        }
              </button>`;
      }
    })
    .join("");
  // filter Category
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    let selectedItems = [...filteredProducts];
    btn.addEventListener("click", (e) => {
      filteredItems = selectedItems.filter((product) => {
        if (e.target.dataset.id === "all") {
          return product;
        }
        return product.company === e.target.dataset.id;
      });
      filteredProducts = [...filteredItems];
      displayProducts();
    });
  });
}
displayFilterBtns();
