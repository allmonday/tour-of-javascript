function extend(Child, Parent) {
	var F = function () {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.super = Parent.prototype;
}

function Base() {}
Base.prototype.name = 'base';  // name 放在 prototype 好吗?

function Child(me) {
	this.me = me;
}

extend(Child, Base);

var c = new Child('kkk');
console.log(c.me);
console.log(c.name);
console.log(c instanceof Child);
console.log(c instanceof Base);
