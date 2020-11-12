"use strict";
const selectionSort = (data) => {
	const { collection, length } = data;
	for (let i = 0; i < length - 1; i++) {
		let small = findSmallest(collection, length, i + 1);

		swap(collection, small, i);
	}
};

const swap = (collection, a, b) => {
	if (a == b) {
		return;
	}
	swapElements(collection[a], collection[b]);

	[collection[a], collection[b]] = [collection[b], collection[a]];
	// console.log(collection[a], collection[b]);
};

const swapElements = (elmDataA, elmDataB) => {
	const elementA = document.getElementById(`${elmDataA.id}`);
	const elementB = document.getElementById(`${elmDataB.id}`);
	// console.log(elmentA, elementB);
	interChangeValue(elementA, elmDataB.id, elmDataB.value);
	interChangeValue(elementB, elmDataA.id, elmDataA.value);
};

const interChangeValue = (element, id, value) => {
	// console.log(element);
	element.style.height = `${value}px`;
	element.id = `${id}`;
};

const findSmallest = (collection, length, start) => {
	let small = start - 1;
	for (let i = start; i < length; i++) {
		if (collection[i].value < collection[small].value) {
			small = i;
		}
	}

	// console.log(small, document.getElementById(`${collection[small].id}`));

	return small;
};
