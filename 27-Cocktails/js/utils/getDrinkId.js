function getDrinkId() {
  const items = document.querySelectorAll(".card-link");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      localStorage.setItem("drink", id);
    });
  });
}

export default getDrinkId;
