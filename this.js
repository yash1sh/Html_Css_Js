"use strict";

const r = {
  name: "yash",
  age: 20,
  printdel: function () {
    console.log(`Name is ${this.name} and Age is ${this.age}`);
  },
  ageafter: () => {
    console.log(`Age after 20 is ${this.age * 20}`);
  },
};
