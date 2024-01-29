// imports
import getElement from "./utils/getElement.js";
import sublinks from "./utils/data.js";

// variables
const hero = getElement(".hero");
const navBtn = getElement(".nav-btn");
const closeBtn = getElement(".close-btn");
const backBtn = getElement(".back-btn");
const sidebarLogo = getElement(".sidebar-logo");
const sidebar = getElement(".sidebar");
const sideLinks = getElement(".side-links");
const sideDrawer = [...document.querySelectorAll(".side-drawer")];
const navCenter = getElement(".nav-center");
const navLinks = [...document.querySelectorAll(".nav-link")];
const navModal = getElement(".nav-modal");
const subMenuTitles = [...document.querySelectorAll(".submenu-btn")];
const subMenuArticles = [...document.querySelectorAll(".submenu-article")];
const subMenuInfoContainer = getElement(".submenu-info-container");
const submenuBox = getElement(".submenu-box");
const submenus = [...document.querySelectorAll(".nav-modal-submenu")];

// listeners
navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
//
// console.log(sideDrawer);
sideLinks.addEventListener("click", (e) => {
  const element = e.target;
  const dataId = idChecker(element);
  selectDrawer(dataId);
  backBtnShow();
  backBtn.addEventListener("click", backBtnRemove);
});

// nav links hover
navLinks.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const navLinkCoordinate = e.currentTarget.getBoundingClientRect();
    console.log(navLinkCoordinate);
    const navLinkText = e.currentTarget.textContent;
    const navLinkBottom = navLinkCoordinate.bottom;
    const navLinkCenter =
      (navLinkCoordinate.left + navLinkCoordinate.right) / 2;
    const tempPage = sublinks.find(({ page }) => {
      if (page == navLinkText) {
        return page;
      }
    });
    if (tempPage) {
      submenus.forEach((submenu) => {
        submenu.classList.remove("show-nav-modal-submenu");
        if (submenu.dataset.navid === tempPage.page) {
          submenu.classList.add("show-nav-modal-submenu");
        }
      });
      navModal.style.top = `${navLinkBottom - 10}px`;
      navModal.style.left = `${navLinkCenter}px`;
      navModal.classList.add("show-nav-modal");
    } else if (!tempPage) {
      navModal.classList.remove("show-nav-modal");
    }
    console.log(navLinkText);
    console.log(tempPage);
  });
});
console.log(subMenuArticles);
let tempIndex = 0;
subMenuTitles.forEach((title, index) => {
  let initIndex = 0;
  title.addEventListener("mouseover", (e) => {
    submenuBox.style.transform = `translateY(${100 * index}%)`;
    subMenuArticles.find((item, index) => {
      if (item.dataset.menu === title.dataset.submenu) {
        initIndex = tempIndex;
        tempIndex = index;
        let translateVal = index * 100;
        if (tempIndex > initIndex) {
          subMenuInfoContainer.style.transform = `translateY(${-translateVal}%)`;
        }
        if (tempIndex < initIndex) {
          subMenuInfoContainer.style.transform = `translateY(${-translateVal}%)`;
        }
      }
    });
  });
});
navCenter.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("nav-link")) {
    navModal.classList.remove("show-nav-modal");
  }
});
hero.addEventListener("mouseover", function (e) {
  navModal.classList.remove("show-nav-modal");
});

// function
// Title Checker
function idChecker(element) {
  if (element.dataset.id) {
    const sideLinkId = element.dataset.id;
    return sideLinkId;
  } else if (element.parentElement.dataset.id) {
    const subSideLinkId = element.parentElement.dataset.id;
    return subSideLinkId;
  } else if (element.parentElement.parentElement.dataset.id) {
    const subSideLinkId = element.parentElement.parentElement.dataset.id;
    return subSideLinkId;
  } else {
    return;
  }
}

// slide drawer
function selectDrawer(id) {
  const selected = sideDrawer.filter((item) => {
    return item.dataset.drawer == id;
  });
  selected[0].classList.add("show-drawer");
  console.log(selected[0]);
  // selected.classList.add("show-drawer");
}

// hide Drawer
function hideDdrawer() {
  const selected = sideDrawer.filter((item) => {
    return item.classList.contains("show-drawer");
  });
  selected[0].classList.remove("show-drawer");

  console.log(selected);
}

// show back btn
function backBtnShow() {
  backBtn.classList.add("show-btn");
  // sideLinks.classList.remove("hide-side-links");
  sidebarLogo.classList.add("hide-sidebar-logo");
}

// remove back btn
function backBtnRemove() {
  backBtn.classList.remove("show-btn");
  // sideLinks.classList.remove("hide-side-links");
  sidebarLogo.classList.remove("hide-sidebar-logo");
  backBtn.removeEventListener("click", backBtnRemove);
  hideDdrawer();
}
