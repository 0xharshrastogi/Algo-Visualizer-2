export default class DataSet {
	lenght = 0;
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
}
