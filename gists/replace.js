var origin = 'feature1;\nfeature2;\nfeature3';

origin = origin.replace(/;\n/g, '\n');

console.log(origin);

origin = origin.replace(/\n/g, ';\n');

console.log(origin);

