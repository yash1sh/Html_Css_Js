const secureBooking = function () {
  let passcount = 0;
  return function () {
    passcount++;
    console.log(passcount);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// closures which happens immideatly we just have to undertnd if that is happening
// Now consider that here before execution of the program the secureBooking function is stored in the global exection context(ec)  which is in the call stack and then the variable is stored right above the global scope in the new execution context now whe the function returns the function to the booker after execution now the booker is stored in the global scope and the execution context for the passcount is poped off

//Question:- how the booker function is able to optain the variables if the execution constext is popped of?

//A closuer remembers all the variables that existed at the functions birthplace so secureBooking is the birthplace of the booker function by the time is created

//During the process the booker(); creates a new (EC) which has a empty value the scope of the booker() funtion has the empty value
//Secreate of closure: functions has access to the variable env of the execution context in which it was created 2) Closures:VE attached to the function exactly  ast it was at the time and place the function was created

//Insimple the booker has the scope and in that scope passcount is stored so it is able to access the passcount

//              closure in short
//
//          A closure gives a function access to all the variables of its parent function even afterthat aprent function has returned . The function keeps a reference to its outerscope,Which preserves the scope chain throught time

//      Note we cannot take variables from the closures because its justa n internal prperty but we can take a look to the internal prperty

console.dir(booker);

//[[scope]] :- means internal prprty

//More examples

//1)

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);

const h = function () {
  const b = 838;
  f = function () {
    console.log(b * 3);
  };
};

h();
f();

const q = function () {
  console.log(this.b);
};

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`we are boarding all the ${n} pass`);
    console.log(`we grouped in ${Math.trunc(perGroup)}`);
  }, wait * 1000); //iN MILISECONDS

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassenger(180, 3);
