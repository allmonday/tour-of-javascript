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

var group = /[aeiou]/;
var groupAZ = /[A-Z]/;
// [0-9]
var groupaz = /[^A-Z]/

var pattern = /[Jj][aeiou]v[aeiou]/;

/*
g: global
i: ignoreCase
m: multiline
*/

var pattern = /java/i
pattern.ignoreCase  // true

/* special characters 
\w : [A-Za-z0-9_]
\W: [^A-Za-z0-9_]
\d: [0-9]
\D: [^0-9]
\s: [\t\r\n\f]
\S: [^ \t\r\n\f]
*/

/* modifiers
?: 0, 1
*: 0, >1
+: 1, >1 
{n}: n times
{n, }: >n
{, m}: <m
{n, m}:
^:
$:
*/

/* String method */
"hello world".split(/s+/)
"javascript".match(/[aeiou]/) // ["a"]
"javascript".match(/[aeiou]/g) // ["a", "a", "i"]
"javascript".search(/java/i) // 0
"javascript".replace(/[aeiou]/ig, "*") // j*v*scr*pt
```

## Chapter 6: DOM

```javascript
var body = document.body;
typeof body; // "object"
body.nodeType;  // 1
```

code | type
--- | ---
1 | element
2 | attribute
3 | text
8 | comment
9 | document

```javascript
body.nodeName // "body"

/* shortcut */
document.body;
document.images;
document.links;
document.anchors;
document.forms;

/* get element by id */
var title = document.getElementById('title')
var paragraphs = document.getElementsByTagName('p')
var cls = document.getElementsByClassName('swim');

document.querySelector('#bike')
document.querySelector('.swim')

/* navigating */
var sports = document.getElementById('sports')
sports.childNodes
/*
NodeList [ #text "
", <p.swim>, #text "
", <p#bike>, #text "
", <p>, #text "
" ]
*/
sports.firstChild
sports.lastChild
bike.parentNode
bike.nextSibling
bike.previousSibling

// finding the value of node
swimTextNode = swim.firstChild
swimTextNode.nodeValue

var a = document.querySelector('p')
// undefined
a.textContent
/*
"The Document Object Model (DOM) allows you to access elements of a web
  page and enable interaction with the page by adding and removing elements,
  changing the order of elements, changing the content of elements, changing
  element attributes, and even altering how elements are styled."
*/

// attributes
swim.getAttribute("class"); // "swim"
var meta = document.getElementsByTagName("meta")[0];
meta.getAttribute("charset"); // if not exist, return null

swim.setAttribute("class", "swimming");

swim.className; // "swimming"

// classList is avaliable in IE10 and above
swim.classList.add('run');
swim.classList.remove('swim');
swim.classList.toggle('sport');
swim.classList.contains('sport');


/* add element dynamically*/
var newPara = document.createElement('p');
var text = document.createTextNode('Transition 1');
newPara.appendChild(text);

sports.innerHTML;
swim.style.border = "blue 2px solid";
swim.style.backgroundColor = "green";
```

## chapter 7: events



## chapter 10: testing and debugging

### strict mode: 严格模式会产生更多异常, 阻止使用弃用的特性.
```javascript
(function () {
  'use strict';
  }());
```

### linting tools: js lint, js hint

### browser sniffing:
```javascript
window.navigator.userAgent; // may not correct
```

### feature detection:
```
if (window.unicorn) {
  unicorn();
}
```

### error objects:
```javascript
var error = new Error("opps, something went wrong");

RangeError
EvalError
ReferenceError
SyntaxError
TypeError
URIError

throw 5;
throw "javascript";
throw {name: "Ninja"};

throw new Error("something goes wrong");

try {
  return String(squareRoot(number))
} catch (error) {
  return squareRoot(-number) + "i"
} finally {
  console.log("hi");
}
```
