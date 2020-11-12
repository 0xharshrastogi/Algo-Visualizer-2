"use strict";
import setup from "../create-bars-element/create-bars-element.js";

let collection = setup(1000);

document.getElementById("sort-btn").addEventListener("click", () => {
	document.querySelector(".bar-container").innerHTML = "";
	console.time("Suffeling");
	collection = setup(1000);
	console.timeEnd("Suffeling");
});
// console.log(collection.to/String());
document.getElementById("start-sort").addEventListener("click", () => {
	console.time("Sorting");
	selectionSort(collection);
	console.timeEnd("Sorting");
});
