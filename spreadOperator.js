const arr = [12, 3, 34];
const arr2 = [54, ...arr];
console.log(arr2);
const arr3 = [36, arr];
console.log(arr3);
//Both are different

const arr4 = [...arr3, ...arr, ...arr2,11];
console.log(arr3);

//Iterables :Arrays ,strings,maps,sets, But not for object

const str='Yash'
const letter=[...str,'','ssjhjshdshdhbdd']
console.log(letter)

console.log(...str)
//Cannot be used in ${...str} is Wrong 

const restorn ={num:'asasa',...arr}
console.log(restorn)

//Other way of copying the object 

const copy={...restorn}
console.log(copy)