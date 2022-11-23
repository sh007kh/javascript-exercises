import { showLoading } from "./toggleLoading.js";

async function fetchData(url) {
  showLoading();
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default fetchData;
