function Base() {
	this.name = 'base';
}

function Child(me) {
	Base.apply(this, arguments);
	this.me = me;
}

var c = new Child('kkk');
console.log(c.me);
console.log(c.name);

