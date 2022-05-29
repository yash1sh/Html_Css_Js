"use strict";

var randomname = "priyash";

const r = {
  name: "yash",
  age: 20,
  printdel: function () {
    console.log(`Name is ${this.name} and Age is ${this.age}`);
    //      Solution 1
    //     const self=this;
    //     const inside = funtion() {
    //         // consle.log(this); this wont work because this here is refering to the variable which is inside the funtion
    //         console.log(self.name), //this works as we are outer funtion and here this refers to the object
    //     };
    //     inside();
    //   },
    const inside = () => {
      console.log(this.name); //As there is no this keyword for the arrow funtion we get this as the parent ie r
    };
    inside();
  },

  ran: () => {
    console.log(`Random name taken as  ${this.randomname}`);
  },
  //In arrow funtions this doesnt has nay value so its a random funtion Here the ans is priyash because var keeps these property in windows hence in arrow funtion this.random name is priyash
};

// Arguments

const arg = funtion(a, b){
  console.log(arguments);
  return a + b;
};

arg(1,2,3,4,5) //Here we can pass as many arguments we want but they dont get a new we can use them as they get stored in the array of arguments




