var base = {name: "kikodo"};

var child = Object.create(base);

console.log(child.name);

function Employee(name) {
	this.name = name;
	this.getName = function () {return this.name;}
}
var employee = {};
Employee.call(employee, 'jack');
