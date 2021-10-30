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

// ********** smooth scroll ************
// select links
