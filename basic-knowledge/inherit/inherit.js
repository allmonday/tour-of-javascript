function Person(name) {
	this.name = name;
}

Person.prototype = {
	kind: 'human'
}

var manA = new Person('kikodo');
var manB = new Person('tang');

console.log(manA.kind)
console.log(manA.kind)
