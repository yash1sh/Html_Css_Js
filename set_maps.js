"use strict";
const ordset = new Set([1, 2, 3, 1, 4, 5, 2, 3]);
console.log(ordset);
console.log(ordset.size);
console.log(ordset.has(1));
ordset.add(9);
console.log(ordset);

const arr = [99, 88, 77, 66];
ordset.add(...arr);
ordset.delete(5);
console.log(ordset);

//to delete everything
//orset.clear()

for (const order of ordset) console.log(order);
