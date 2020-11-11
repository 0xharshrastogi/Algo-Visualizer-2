import { Bar } from "../module-bar/bar.js";

const createBarElement = (barId, height) => {
	const barElement = document.createElement("div");

	barElement.setAttribute("id", barId);
	barElement.style.height = height + "px";
	barElement.className = "bar";

	return barElement;
};

const addBarsTo = () => {
	const barWrapper = document.querySelector(".bar-container");

	return function (element) {
		barWrapper.appendChild(element);
	};
};

const appendBars = () => {
	const add = addBarsTo(),
		bar = new Bar();

	add(createBarElement(bar.id, bar.value));
};

for (let i = 0; i < 20; i++) {
	appendBars();
}
