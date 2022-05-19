"use strict";

var randomname = "priyash";

const r = {
  name: "yash",
  age: 20,
  printdel: function () {
    console.log(`Name is ${this.name} and Age is ${this.age}`);
  },
  ran: () => {
    console.log(`Random name taken as  ${this.randomname}`);
  },
  //In arrow funtions this doesnt has nay value so its a random funtion Here the ans is priyash because var keeps these property in windows hence in arrow funtion this.random name is priyash
  
};
