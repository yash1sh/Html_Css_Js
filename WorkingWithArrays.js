"use strict";
let arr = [1, 2, 3, 4, 5];
//Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log([...arr]); //Spreed Operator

//SPLICE
//Here it does change the original array

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); //Second is number of element we want to delete
console.log(arr);
let arr2 = ["j", "r", "e", "k"];
console.log(arr2.reverse());
console.log(arr2); //Muetates the array

//Concat

const letters = arr.concat(arr2); //Does no mutates
console.log(letters);

//Join
console.log(letters.join("-")); //Separater '-'

//LOOPING Arrays

const bb = [44, 33, 344, 3, -343, -34, 23, 344, 23];
// for (const mov of bb) { //Without index
for (const [i, mov] of bb.entries()) {
  console.log(i, mov);
}

console.log("-------------ForEach------------");

bb.forEach(function (mov, ind, dd) {
  //Value , Index , And the full array
  console.log(ind, mov);
});

//Working : 0:function(44)
//1: function(33)
//2:function(344) ... and so on

//For MAp
const cuurency = new Map([
  [1, "hi"],
  [2, "hola"],
  [3, "namasthe"],
  [4, "jsdjb"],
  [5, 6],
]);

cuurency.forEach((value, key, map) => {
  console.log(key, value, map);
});

//For Set

const mice = new Set(letters);
console.log(mice);

mice.forEach((value, _, arr) => {
  //'_' used to ignore the variable kinda throw of
  console.log(value, arr);
});
