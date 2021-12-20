const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
console.log(slides.length);

let counter = 0;
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
  slide.style.transform.translateX = `${counter * 100}%`;
});

prevBtn.style.visibility = "hidden";

prevBtn.addEventListener("click", function () {
  counter--;
  btnVisible();
  carousel();
});
nextBtn.addEventListener("click", function () {
  counter++;
  btnVisible();
  carousel();
});

function btnVisible() {
  if (counter > 0) {
    nextBtn.style.visibility = "visible";
    prevBtn.style.visibility = "visible";
  }
  if (counter > slides.length - 2) {
    nextBtn.style.visibility = "hidden";
  }
  if (counter <= 0) {
    prevBtn.style.visibility = "hidden";
  }
}
function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
