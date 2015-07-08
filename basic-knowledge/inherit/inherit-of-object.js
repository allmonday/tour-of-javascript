var Chinese = {
	nation: 'china'
}

// var Doctor = {
// 	career: 'doctor'
// }

function object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

var Doctor = object(Chinese);

Doctor.career = 'doctor';

console.log(Doctor.nation);
