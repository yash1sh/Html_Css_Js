//Spread becasue in right
const arr = [1, 2, ...[3, 4]];
//Rest because in left side
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// For Objects

const obj = function (...numbers) {
  console.log(...numbers);
};
obj(1, 2, 3);
obj(1, 2, 3, 44, 5, 10);
