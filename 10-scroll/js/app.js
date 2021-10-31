// ********** set date ************
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
// ********** nav toggle ************
// select button and links

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".link-container");
const links = document.querySelector(".nav-links");
const linksHeight = links.getBoundingClientRect().height;
console.log(linksHeight);

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
console.log(navHeight);
window.addEventListener("scroll", function () {
  if (window.scrollY > navHeight) {
    console.log(this.window.scrollY);
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
    console.log("removed");
  }
});
// ********** smooth scroll ************
// select links
