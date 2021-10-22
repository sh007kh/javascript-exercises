const openModal = document.querySelector("#btn-hero");
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});
