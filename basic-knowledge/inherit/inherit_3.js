// 这种不行, 
function Base() {};
Base.prototype.name = 'base';

function Child(me) {
	this.me = me;
}

Child.prototype = Base.prototype;
Child.prototype.constructor = Child; // Base 的 constructor 也毁了

var c = new Child('kkk');
console.log(c.me);
console.log(c.name);
