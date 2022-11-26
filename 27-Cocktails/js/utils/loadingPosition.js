import getElement from "./getElement.js";

const loading = getElement(".loading");
const navbar = getElement(".navbar");
const form = getElement(".search-form");

const navHeight = navbar.getBoundingClientRect().height;
const searchHeight = form.getBoundingClientRect().height;

export const loadingPosition = () => {
  let position = 0;
  window.addEventListener("scroll", () => {
    if (window.scrollY > position) {
      position = 0;
      return (loading.style.top = `${position}px`);
    } else {
      position = navHeight + searchHeight;
      return (loading.style.top = `${position}px`);
    }
  });
};
