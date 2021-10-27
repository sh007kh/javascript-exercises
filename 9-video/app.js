// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preLoader = document.querySelector(".preloader");
const video = document.querySelector(".video-container");
window.addEventListener("load", function () {
  preLoader.classList.add("visible");
});

const switchBtn = document.querySelector(".switch-btn");
const switchSlide = document.querySelector(".switch");
switchBtn.addEventListener("click", function () {
  if (!switchSlide.classList.contains("slide")) {
    switchSlide.classList.add("slide");
    video.pause();
  } else {
    switchSlide.classList.remove("slide");
    video.play();
  }
});
