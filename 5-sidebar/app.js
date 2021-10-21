const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("#sidebar");

navBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
