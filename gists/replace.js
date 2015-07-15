var origin = 'feature1;\nfeature2;\nfeature3';

origin = origin.replace(/;\n/g, '\n');

console.log(origin);

origin = origin.replace(/\n/g, ';\n');

console.log(origin);


var origin = "      hello <br/> world <br>"

console.log(origin.trim())
out = origin.replace(/(<br\/>| <br>)/g, '\n');
console.log(out);

