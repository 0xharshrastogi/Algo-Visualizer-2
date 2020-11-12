"use strict";
import setup from "../create-bars-element/create-bars-element.js";

let collection = setup(10);

document.getElementById("sort-btn").addEventListener("click", () => {
	document.querySelector(".bar-container").innerHTML = "";
	collection = setup(10);
});
console.log(collection);
document.getElementById("start-sort").addEventListener("click", () => {
	selectionSort(collection);
});
