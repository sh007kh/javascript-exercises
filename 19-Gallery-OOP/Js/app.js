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
    this.modalImageName = getElement(".modal-images-heading");
    this.modalMainImg = getElement(".modal-image");
    this.modalSubImg = getElement(".modal-sub-image");
    this.modalSubImgContainer = getElement(".modal-image-selection");
    this.closeBtn = getElement(".modal-close-btn");
    this.prevBtn = getElement(".prev-btn");
    this.nextBtn = getElement(".next-btn");
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseSubImage = this.chooseSubImage.bind(this);

    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("slide-image")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }
  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalSubImgContainer.innerHTML = list.map(function (image) {
      return `<img
              src="${image.src}"
              alt="${image.alt}"
              title="${image.title}"
              data-id="${image.dataset.id}"
              class="${
                image.dataset.id === selectedImage.dataset.id
                  ? "modal-sub-image selected"
                  : "modal-sub-image"
              }"
            />`;
    });
    this.modal.classList.add("open-modal");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalSubImgContainer.addEventListener("click", this.chooseSubImage);
  }
  setMainImage(selectedImage) {
    this.modalMainImg.src = selectedImage.src;
    this.modalImageName.textContent = selectedImage.title;
  }
  closeModal() {
    this.modal.classList.remove("open-modal");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalSubImgContainer.removeEventListener("click", this.chooseSubImage);
  }
  nextImage() {
    const selected = this.modalSubImgContainer.querySelector(".selected");
    const next =
      selected.nextElementSibling ||
      this.modalSubImgContainer.firstElementChild;
    selected.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImage(next);
  }
  prevImage() {
    const selected = this.modalSubImgContainer.querySelector(".selected");
    const prev =
      selected.previousElementSibling ||
      this.modalSubImgContainer.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
  }
  chooseSubImage(e) {
    const selected = this.modalSubImgContainer.querySelector(".selected");
    selected.classList.remove("selected");

    if (e.target.classList.contains("modal-sub-image")) {
      e.target.classList.add("selected");
    }
    this.setMainImage(e.target);
  }
}
// ****************
// variables
const natureSection = new Gallery(getElement(".nature-center"));
const citySection = new Gallery(getElement(".city-center"));
// event Handlers

// functions
