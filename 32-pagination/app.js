// imports
import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

// variables
const key = "b5zgNs0dMdasX0l1UfAr58wY_Zj1QEH4OTPaPfIZTSk";
// const baseUrl = `https://api.unsplash.com/photos/random?client_id=${key}`;
const baseUrl = `https://api.unsplash.com/search/photos/?client_id=${key}&query=profile?page=1`;
// listeners

getData(baseUrl);
// functions
async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}
