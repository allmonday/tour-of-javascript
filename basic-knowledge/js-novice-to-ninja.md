## chapter 3: Array, Logic, and Loops

```javascript
typeof []
// "object"

var pizzas = []
pizzas[0]
// undefined

pizzas[2] = "hello"
pizzas;
// [undefined, undefined, "hello"]

delete pizzas[2]
pizzas[2];
// undefined

/* get last item */
pizzas[pizzas.length -1]

/* mute length */
pizzas.length = 10;
// fill with others with undefined

pizzas.pop() // pop last one
pizzas.push()
pizzas.shift();  // pop first one
pizzas.unshift("chicken");  // insert at firt

pizzas.concat(["spicy beef", "chicken"]) // self remain unchanged
pizzas.join()
pizzas.join(" & ")


pizzas.slice(2, 4)  // index 2, 3,  self remain unchanged
pizzas.splice(2, 1, "a", "b")  // remove index 2 by 1, replace with a, b
pizzas.splice(2, 0, "aaa")  // insert aaa at index 2
pizzas.splice(2, 1)  // remove element at index 2


pizzas.reverse()  // self changed

pizzas.sort()  // alphabetica order for string, self changed
[5, 9, 10].sort();
// << [10, 5, 9]  // by alphabetical .. 1, 5, 9, first alphabit

pizzas.indexOf("spicy beef");  // -1 for not found


do {
    // do something
} while (condition)


for (var i=0; max=pizzas.length; i++) {
    console.log(pizzas[i])
}
```


## Chapter 5: Objects

```javascript
var superman = {
  name: "Superman",
  "real name": "Clark Kent",
  height: 75,
  weight: 235,
  hero: true,
  villain: false,
  allies: ["Batman","Supergirl","Superboy"],
  fly: function(){
    return "Up, up and away!";
  }
}

var spiderman = new Object();

"city" in superman  // check exists
superman.city !== undefined

superman.hasOwnProperty('city')

/* finding all properties of object */
for (var key in superman) {
    console.log(key + ":" + superman[key]);
}

for (var key in superman) {
    if (superman.hasOnwProperty(key)) {
        console.log(key + ":" + superman[key]);
    }
}

delete superman.fly

/* object as params */
function greet(options) {
    options = options || {},
    var greeting = options.greeting || 'Hello';
    // ...
}

// JSON
JSON.stringify(superman);

// to nearest
Math.round(-4.2)  // -4

Math.min(1, 2, 3, 5);

Math.PI

Math.tan(Math.PI/4); // 0.99999..

Math.random();


var today = new Date();
today.toString();  // "Sun Jun 08 2014 15:43:03 GMT+0100 (BST)"

var christmas = new Date('2014 12 25');
var chanukah = new Date('16 December 2014');

var diwali = new Date(1414018800000);

diwali.getDay();  // 4 Thurday
diwali.getDate(); // it's on the 23rd
diwali.getMonth(); // it's in October
// << 9

diwali.getYear(); // 114 broken
diwali.getFullYear(); // use this;

diwali.getTime();
// << 1414018800000


diwali.setDate(11);  // november 11, 2015
diwali.setMonth(10); // November is month 10
diwali.setFullYear(2015)


/* regexp*/
var pattern = /\w+ing/;
var pattern = new RegExp('\w+ing');
pattern.test('joke') // false
pattern.test('joking')  // true
```
