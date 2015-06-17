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

var le = 'asdfasldfjalsdfjaljdfljaskdf;asdjf'
// var le = 'aasdjf'
if (le.length > 9) {
	le = le.slice(0, 9);
	le += '...';
}
console.log(le);

