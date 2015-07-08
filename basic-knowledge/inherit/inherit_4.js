function Base() {}
Base.prototype.name = 'base';  // name 放在 prototype 好吗?

function Child(me) {
	this.me = me;
}

var F = function () {};
F.prototype = Base.prototype;
Child.prototype = new F();
Child.prototype.constructor = Child;

var c = new Child('kkk');
console.log(c.me);
console.log(c.name);
console.log(c instanceof Child);
console.log(c instanceof Base);
