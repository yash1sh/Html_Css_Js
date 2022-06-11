"use strict";

//Setting defaults values in functions

const num = function (
  name = "yash",
  age = 26,
  year = 1888 * age // Should be in order
  //If no parameters are passed then default parameters are used and you can also do expressions
) {
  const obj = {
    name,
    age,
    year,
  };
  console.log(obj);
};

num("rajesh");
num("jignesh", 33);
num("hahaha", undefined, 1919); //To use default value

//first class functions:- such as values ,method call in functions (methods like array)
//high order : functions calling other function ,functions returning other functions

const removeSpacePutLowerCase = function (str) {
  return str.replace(/ /g, "").toLowerCase(); //USed for global search searchs the sring inside it
};

const FirstUpper = function (str) {
  return str.replace(str[0], str[0].toUpperCase());
};

const [first, ...other] = "uasjh jhsjav jahgsjh jagshaj".split(" ");
console.log(other);

//Higher Order Function

const transform = function (str, fn) {
  console.log(`Transformed to:${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};

transform("hello yash", FirstUpper);
transform("haha ha h hds ", removeSpacePutLowerCase);

//functions returning new functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greehey = greet("hey");
greehey("Yash");
greehey("yajnesh");

//or

greet("hello")("shreyas");
// console.log(greet("hel"));

const greet2 = (hello) =>
  function (name) {
    console.log(`${hello} ${name}`);
  };
greet2("hello")("vaibhav");

//Using call blind and apply methods
const var2 = {
  name: "yash",
  bun(dd, ddd) {
    console.log(
      `this is bun with ${dd} and ${ddd} with the name: ${this.name}`
    );
  },
};
const var3 = {
  name: "rakshith",
};

const var4 = var2.bun; //This can be done as Function is a  first class function
// var4("hello", "prinson");
//Not works 👆
// -----As we see here the var4 contains the functions and it is the copy of the function. the problem is the this keyword it doesnt work so the function has to be specified which he has to take we can use the call,bind,apply method to set the this value------

//Call method
var4.call(var3, "hello", "prinson"); // Here it is specified that the obj is var3

//Apply method

//--The apply methods is same as the call method but the differece is it take the parameters as an array

var4.apply(var2, ["ahha", "vaibhav"]);
//Not used much ------
//Different way by call
var4.call(var2, ...["hhaha", "jiga"]); //Better way

//Bind methods
//This will return a new function where this is set to the method

const var6 = var4.bind(var2); //parameter can be set so no need to put when usig it again
//Partial application: where parts of arguments are assigned beforehand
var6("jhbs", "sdkj");

//Making the data private
{
  const table2 = "sjhvd";
  var table = "hagaga";
}
console.log(window.table);
// console.log(table);

//Making function run just one time

(function () {
  console.log("Run only once");
})();
//Invoke instant
//This is used to run some code only once and cannot use data again and again
