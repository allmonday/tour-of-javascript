function Base() {
	this.name = 'base';
}

function Child(me) {
	this.me = me;
}

Child.prototype = new Base();
Child.prototype.constructor = Child; // 指向回自己

var c = new Child('kkk');
console.log(c.me);
console.log(c.name);

console.log(Child == Child.prototype.constructor);
console.log(c.constructor == Child.prototype.constructor);
