"use strict";
//Sets can be used to remove duplicate values

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
// Mapping ...................................
// For mapping the easy way is to create an empty set then add the key and values using the set

const value = new Map();
value.set("Number  ", "Name "); // ('Key','Value')
value.set("1", "Yash");
value.set("2", "Shreyas");
value.set("3", "Yajnesh");

// This also returns the map example
console.log(value.set("4", "Vaibhav"));

//Can set Arrays As well
value.set("array", [1, 2, 3, 5, 5, 6, 7]);
//Boolean are very usefull
value.set(true, "hello bro");
value.set(false, "bye bro");
//To set multi value at same time
value.set(1, 2).set(2, 3).set(5, 6);

//to get the value we use Get merthod passing the key

console.log(value.get("name")); // Datatype matters as here '1' and 1 are different

//Can use conditions these as we use boolean values
value.get(1 > value.get(1) && 1 > value.get(2));

//To check if there is a element we use Has
console.log(value.has("Yash")); //Gives true or false

//to delete
value.delete(2);

//To clear the map
// ----> value.clear()

//Can use array in key
value.set([99, 66], "hola");

console.log(value.has([99, 66])); // This wont work as the array is stored different and we has different address
//To use
const arr1 = [99, 666];
value.set(arr1, "kjdckbsdcbsdcsd");
console.log(value.has(arr1));

// set values in better way

const value1 = new Map([
  [1, "java"],
  [2, "css"],
  [3, "html"],
  [4, "javascript"],
  [true, "coorect"],
  [false, "incorrect"],
]);
//Array inside the array
console.log(value1); 


//Converting and object to the map
const obj={
    name:'yash',
    age:'69'
}
