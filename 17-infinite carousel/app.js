const imagesArray = [
  {
    url: "./images/image-1.jpg",
    alt: "Mountains at dusk",
  },
  {
    url: "./images/image-2.jpg",
    alt: "Mountain lake at sunset",
  },
  {
    url: "./images/image-3.jpg",
    alt: "River through the mountains",
  },
  {
    url: "./images/image-4.jpg",
    alt: "Mountain peak",
  },
  {
    url: "./images/image-5.jpg",
    alt: "Snowy mountain peak in fog",
  },
];
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slide = document.querySelector(".slide");
const root = document.querySelector(":root");
let slideIndex = 1;
let slideMoving = false;
// listeners
prevBtn.addEventListener("click", function () {
  if (slideMoving) {
    return;
  }
  moveHandler();
});
nextBtn.addEventListener("click", function () {
  if (slideMoving) {
    return;
  }
  moveHandler("right");
});
// functions
// ===========
// fetch images
function fetchImages() {
  imagesArray.push(imagesArray[0]);
  imagesArray.unshift(imagesArray[imagesArray.length - 2]);
  slide.innerHTML = imagesArray.map(processImages).join("");
  moveSlides();
}
fetchImages();

// change images into inner html blocks
function processImages(item) {
  return `<img src="${item.url}" alt="${item.alt}" class="slide-img" />`;
}

// moving slides
function moveSlides() {
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  const slidesArray = [...slide.querySelectorAll("img")];
  root.style.setProperty(
    "--slide-progressbar-width",
    `${(100 / (slidesArray.length - 3)) * (slideIndex - 1)}%`
  );
}
// move slide when clicked
function moveHandler(direction) {
  slideMoving = true;
  slide.style.transition = `all 0.4s linear `;
  direction !== "right" ? (slideIndex -= 1) : (slideIndex += 1);
  moveSlides();
}
slide.addEventListener("transitionend", () => {
  slideMoving = false;
  const slidesArray = [...slide.querySelectorAll("img")];
  root.style.setProperty(
    "--slide-progress--transition",
    `${
      slideIndex === slidesArray.length - 1
        ? "none"
        : "all 400ms cubic-bezier(0.82, 0.02, 0.39, 1.01)"
    }`
  );
  if (slideIndex === 0) {
    slide.style.transition = "none";
    slideIndex = slidesArray.length - 2;
    moveSlides();
  }
  if (slideIndex === slidesArray.length - 1) {
    slide.style.transition = "none";
    slideIndex = 1;
    moveSlides();
  }
});
