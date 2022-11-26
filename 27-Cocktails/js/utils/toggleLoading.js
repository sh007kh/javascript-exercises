import getElement from "./getElement.js";
import { loadingPosition } from "./loadingPosition.js";
const loading = getElement(".loading");
export const showLoading = () => {
  loadingPosition();
  loading.classList.remove("hide-loading");
};
export const hideLoading = () => {
  loading.classList.add("hide-loading");
};
