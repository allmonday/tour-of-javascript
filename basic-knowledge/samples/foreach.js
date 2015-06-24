if (!Array.prototype.myForEach) {
	Array.prototype.myForEach = function (fn) {
		for (var i=0; i<this.length; i++) {
			fn(this[i], i, this);
		}
	}
}

['a', 'b', 'c'].myForEach(function (val, idx, array) {
	console.log(val, idx, array)
})
