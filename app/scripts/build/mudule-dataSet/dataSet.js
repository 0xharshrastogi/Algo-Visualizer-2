export default class DataSet {
	constructor() {
		this.collection = [];
		this._length = 0;
	}

	push(id, value) {
		this.collection.push({
			value: value,
			id: id,
		});
		this._length++;
	}
	get length() {
		return this._length;
	}
	toString() {
		const output = this.collection.map((val) => val.value);

		return `Length: ${this.length}\n` + output.join("->");
	}
}
