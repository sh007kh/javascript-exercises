// import
import getElement from "./utils.js";
// variables
const navBtnContainer = getElement(".nav-btn-container");
const navBtn = getElement(".nav-btn");
const root = document.documentElement;
const articleContainer = getElement(".articles");

// add article into article section
articleContainer.innerHTML = articles
  .map((article) => {
    // get date of article
    const day = article.date.getDate();
    const options = { month: "long" };
    const month = new Intl.DateTimeFormat("en-US", options).format(
      article.date
    );
    const year = article.date.getFullYear();
    console.log(`${month} ${day}th ,${year}`);

    return `<article class="item" data-id="${article.id}">
        <h3 class="item-title">${article.title}</h3>
        <div class="item-footer">
          <span class="item-date">${month} ${day}th ,${year} </span>
          <span class="item-duration">${article.length} min read</span>
        </div>
        <p class="item-text">
          ${article.snippet}
        </p>
      </article>`;
  })
  .join("");

// listeners
// toggle dark mode
navBtnContainer.addEventListener("click", () => {
  navBtn.classList.toggle("nav-btn-on");
  if (navBtn.classList.contains("nav-btn-on")) {
    navBtn.textContent = "on";
    root.classList.add("dark-theme");
  } else {
    navBtn.textContent = "off";
    root.classList.remove("dark-theme");
  }
});
