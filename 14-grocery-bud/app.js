// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const groceryForm = document.querySelector(".grocery");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
groceryForm.addEventListener("submit", addItem);
// ****** FUNCTIONS **********
groceryList.addE;
// add function
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `
    <p class="grocery-list-item">${value}</p>
              <div class="btn-container">
                <button class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
    `;
    // append item
    groceryList.append(element);
    console.log(groceryList);
    addAlert("item added to list", "add");
    // show container
    groceryContainer.classList.add("show-container");
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    addAlert("please enter an item", "remove");
  }
}
// alert function
function addAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //   remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
