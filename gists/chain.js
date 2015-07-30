function sum(n) {
	var v = function (x) {
		return sum( x+n );
	}
	v.toString = function () {
		return n;	
	};
	return v;
}

console.log(sum(1)(2)(3) == 6);  // cause == will invoke toString function 
