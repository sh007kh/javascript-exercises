// constructor
class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.increaseBtn = element.querySelector(".increase-btn");
    this.resetBtn = element.querySelector(".reset-btn");
    this.decreaseBtn = element.querySelector(".decrease-btn");
    this.valueDOM = element.querySelector(".counter-value");
    this.valueDOM.textContent = this.value;
    // bind this
    this.increase = this.increase.bind(this);
    this.reset = this.reset.bind(this);
    this.decrease = this.decrease.bind(this);
    this.increaseBtn.addEventListener("click", this.increase);
    this.resetBtn.addEventListener("click", this.reset);
    this.decreaseBtn.addEventListener("click", this.decrease);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
}

// variables
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 500);
// event Handlers

// functions
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`"this selector ${selector} doesn't exist"`);
}
