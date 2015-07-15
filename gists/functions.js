function add(args) {
	args = args || 0;
	return this.a + this.b + args;
}

var value = {a: 10, b: 21};
console.log(add.apply(value, [21]));
console.log(add.call(value, 21));



x = 10;
var module = {
	x: 81,
	getX: function () {
		return this.x;
	}
}

console.log(module.getX());
var getX = module.getX;
console.log(getX());
var boundGetX = getX.bind(module);
console.log(boundGetX());


function list() {
	return Array.prototype.slice.call(arguments);
}

var list1 = list(1,2,3,4,5,6);

console.log(list1);
