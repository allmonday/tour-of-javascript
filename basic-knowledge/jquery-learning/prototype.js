function Student(name) {
	this.name = name;
}

Student.prototype.intro = function () {
	console.log('hello, I am' + this.name);
}

var stu = new Student('min');
stu.intro();

// rewrite the intro method
Student.prototype.intro = function () {
	console.log('hi, I am' + this.name);
}

var stu = new Student('min');
stu.intro();
