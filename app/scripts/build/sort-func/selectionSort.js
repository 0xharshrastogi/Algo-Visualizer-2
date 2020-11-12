"use strict";
const selectionSort = (data) => {
	const { collection, length } = data;
	for (let i = 0; i < length - 1; i++) {
		// const smallest = findSmallest(collection, length);
	}
	console.log(findSmallest(collection, length));
};

const findSmallest = (collection, length) => {
	console.log(collection, length);
	let small = 0;
	for (let i = 1; i < length; i++) {
		if (collection[i].value < collection[small].value) {
			small = i;
		}
	}
	console.log(small, document.getElementById(`${collection[small].id}`));
	return small;
};
