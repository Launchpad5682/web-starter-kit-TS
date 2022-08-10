import "./styles/index.scss";
import Img from "./assets/code.jpg";

// example for using the lazy loading
const getSortedOrder = async () => {
  const { default: _ } = await import("lodash");

  const sortByOrder = _.sortedIndex([20, 40], 20);

  return sortByOrder;
};

const root = document.getElementById("root");
const divContainer = document.createElement("div");

getSortedOrder().then((sortByOrder) => {
  divContainer.innerHTML = `This is a web starter project bootstrapped using Web Starter Kit TS ${sortByOrder}`;
  divContainer.classList.add("app");
});

root.append(divContainer);
const imageContainer = document.createElement("div");
imageContainer.classList.add("img-container");

const imageElement = document.createElement("img");
imageElement.src = Img;
imageElement.classList.add("image");

imageContainer.append(imageElement);
root.append(imageContainer);
