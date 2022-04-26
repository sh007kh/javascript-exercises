// constructor
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`this element "${selection}" does not exist`);
}
// gallery
class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".slide-image")];
    this.modal = getElement(".modal");
    this.modalMainImg = getElement(".modal-image");
    this.modalSubImg = getElement(".modal-sub-image");
    this.closeBtn = getElement(".modal-close-btn");
    this.prevBtn = getElement(".prev-btn");
    this.nextBtn = getElement(".next-btn");
    this.container.addEventListener(
      "click",
      function (e) {
        this.openModal();
      }.bind(this)
    );
    this.closeBtn.addEventListener(
      "click",
      function () {
        this.modal.classList.remove("open-modal");
      }.bind(this)
    );
  }
  openModal() {
    this.modal.classList.add("open-modal");
  }
}
// ****************
// variables
const natureSection = new Gallery(getElement(".nature-center"));
const citySection = new Gallery(getElement(".city-center"));
// event Handlers

// functions
