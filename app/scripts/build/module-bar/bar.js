"use strict";
// Genrate A Random Value
const genrateBetween = (min, max) => {
	if (!(min || max)) throw new Error("Min-Max Value Not Passed");

	return Math.floor(Math.random() * (max - min) + min);
};

const genrateRandomID = () => {
	const range = ["9", "4", "2", "1", "7", "8", "3", "a", "5", "b", "c"];

	let randomID = "";

	for (let i = 0; i < 6; i++) {
		const index = genrateBetween(0, 11);
		randomID += range[index];
	}
	console.log(randomID);
	return randomID;
};
// Genrate A Callback Function To Gentarte Value Between
const genrateRandomValue = () => {
	const wrapperHeight = document.querySelector(".bar-container").clientHeight;

	return () => genrateBetween(20, wrapperHeight);
};

class Bar {
	constructor(barId) {
		this.barId = `${barId || genrateRandomID()}`;
		this.height = genrateRandomValue()();
	}
	get id() {
		return this.barId;
	}
	get value() {
		return this.height;
	}
}

export { Bar };
