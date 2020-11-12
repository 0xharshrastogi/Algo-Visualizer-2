"use strict";
import { Bar } from "../module-bar/bar.js";
import DataSet from "../mudule-dataSet/dataSet.js";

const createBarElement = (barId, height, width) => {
	const barElement = document.createElement("div");

	barElement.setAttribute("id", barId);
	barElement.style.height = height + "px";
	barElement.style.width = width + "px";
	barElement.className = "bar";
	barElement.style.transform;

	return barElement;
};

const addBarsTo = () => {
	const barWrapper = document.querySelector(".bar-container");
	const wrapperWidth = barWrapper.clientWidth;

	const callBackFunc = (element) => {
		barWrapper.append(element);
	};
	return [wrapperWidth, callBackFunc];
};

export default function (count) {
	if (!count) {
		throw new Error("Invalid Value Passed");
	}
	const [wrapperWidth, add] = addBarsTo();

	const width = wrapperWidth / count;

	const dataCollection = new DataSet();
	for (let i = 0; i < count; i++) {
		let bar = new Bar(),
			element = createBarElement(bar.id, bar.value, width - width * 0.1);

		add(element);
		dataCollection.push(bar.id, bar.value);
	}

	return dataCollection;
}
// let collection = appendBar(200)