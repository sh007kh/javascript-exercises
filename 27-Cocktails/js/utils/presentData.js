import fetchData from "./fetchData.js";

async function processData(url) {
  const drinksData = await fetchData(url);
  const { drinks } = drinksData;
  if (drinks === null) {
    return null;
  } else if (drinks.length > 1) {
    return drinks;
  } else if (drinks.length === 1) {
    return drinks;
  }
  return drinksData;
}
export default processData;
