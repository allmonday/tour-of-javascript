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
