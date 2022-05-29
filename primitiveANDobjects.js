let age = 27;
let cage = age;
age = 27;
console.log(cage);

const me = {
  name: "yash",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("friend: ", friend);
console.log("me: ", me);

// To copy the objects 
const friendcopy=Object.assign({},friend);
friendcopy.age=33
console.log(friendcopy);
