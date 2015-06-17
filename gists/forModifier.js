var a = [
	{'a': 21, 'b': 22, 'c': 11},
	{'a': 21, 'b': 22, 'c': 11},
	{'a': 21, 'b': 22, 'c': 11},
	{'a': 21, 'b': 22, 'c': 11}
]

a.forEach(function (obj) {
	obj.a = 0;
})

console.log(a);
