function Person() {}
Person.prototype.getName = function () {
	return this.name;
}
function Me() {
	this.name = 'John';
}
// build the inheritance relationship
Me.prototype = new Person();

var me = new Me();
console.log(me.getName());
