// ********** set date ************
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
// ********** nav toggle ************
// select button and links

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".link-container");
const links = document.querySelector(".nav-links");
const linksHeight = links.getBoundingClientRect().height;

navToggle.addEventListener("click", function () {
  if (linksContainer.getBoundingClientRect().height === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    // ********** close links ************

    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const nav = document.querySelector("#nav");
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener("scroll", function () {
  if (window.scrollY > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});
// ********** top link ************
const topLink = document.querySelector(".top-link");
const heroHeight = document
  .querySelector(".hero")
  .getBoundingClientRect().height;
window.addEventListener("scroll", function () {
  if (window.scrollY > heroHeight) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
