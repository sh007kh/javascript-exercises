import showDrink from "./showModal.js";

function getDrinkId() {
  const items = document.querySelectorAll(".card");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      localStorage.setItem("drink", id);
      showDrink();
    });
  });
}

export default getDrinkId;
