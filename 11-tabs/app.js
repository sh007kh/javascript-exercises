const aboutInfo = document.querySelector(".about-info");
const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".about-content");

aboutInfo.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    content.forEach(function (item) {
      item.classList.remove("show-content");
    });
    const element = document.getElementById(id);
    element.classList.add("show-content");
  }
});
