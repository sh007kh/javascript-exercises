// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preLoader = document.querySelector(".preloader");
const video = document.querySelector(".video-container");
window.addEventListener("load", function () {
  preLoader.classList.add("visible");
});

const switchBtn = document.querySelector(".switch-btn");

const btns = document.querySelectorAll(".switch");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (switchBtn.classList.contains("show-text")) {
      switchBtn.classList.toggle("show-text");
      video.play();
    } else {
      switchBtn.classList.toggle("show-text");
      video.pause();
    }
    btn.classList.toggle("slide");
  });
});
