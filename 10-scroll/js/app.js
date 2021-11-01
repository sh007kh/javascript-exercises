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
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const linkHeight = element.offsetTop;
    console.log(linkHeight);
    let position = linkHeight - navHeight;
    console.log("position", position);
    if (linkHeight === 0) {
      position = linkHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    if (position > linksHeight) {
      linksContainer.style.height = 0;
    }
  });
});
