const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const [a, , b] = arr;
console.log(a, b)[
  //Switch variable value
  (b, a)
] = [a, b];
console.log(a, b);

// 2d array

const arr1 = [1, 2, 3, [4, 5]];
let [p, , q, [r, t]] = arr1;
console.log(p, q, r, t)[
  //Dont know the array
  (l, q, n, m)
] = arr;
console.log(l, q, n, m);

//Objects
const res = {
  name: "shhjssd",
  place: "jhdgchjdc,jhfjgdfd.sjhhdsfdf",
  time: {
    7: "sjdhcjhscsdc",
    8: "ksjhdjhjsdcc",
  },
  arr2: [1, 2, 3, 4],
};

const { name, time, arr2 } = res;
console.log(name, time, arr2);
//to give different names
const { name: name1, time: time1, arr2: arr3 } = res;
//Out of boud will cause variable o be undifined

let a12=222;
let b12=2323;
const ajsh={a:2332,b:92387}
({a12,b12}=ajsh)
console.log(a12,b12)
//Is becasue the '{' in javascsripts is for block code so when we try the destruction we cannot do that so we use '(' 
const{time:{7:o,8:p12}}=res
console.log(o,p12)
//For Objects inside a objects