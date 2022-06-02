let n1 = "hahasjbmh";
console.log(n1[2]);
console.log(n1.length);
console.log("ydjga".length);

//to get position
console.log(n1.indexOf("j"));
//If repeating we can get the last by
console.log(n1.lastIndexOf("h"));
//Is case senitive

console.log(n1.indexOf("jbmh"));

console.log(n1.slice(4)); //cannot slice the original  gets substring
console.log(n1.slice(n1.indexOf("j")));

let n2 = "shdc budhjs jhsdj";

console.log(n2.slice(n2.lastIndexOf(" ")));

//to start from end we can just use negative values

console.log(n1.slice(1, -3));

const seats = (seat) => {
  //B and E are mid seats
  if (seat.slice(-1) === "B" || seat.slice(-1) === "E")
    console.log("Is a middle seat");
  else console.log("Lucky.....");
};

seats("11B");
seats("A");
seats("E");

//String methods-------------------------------------------------
console.log(n1.toLowerCase());
console.log(n1.toUpperCase());

const namecheck = (name) => {
  let name1 = name.toLowerCase();
  let name2 = name1[0].toUpperCase();
  let correctname = name2 + name1.slice(1);
  console.log(correctname);
};

namecheck("yaAH");
namecheck("YAJNESh");

//Convert and check

const email = "agsya@hsbs.io";
const givens = "   agsya@hsbs.io\n   ";

console.log(givens.trim() === email); //Same until there is no different letter

//Can add methods together like .toLowerCase().trim()

console.log(givens.replace("@", "$"));
//Only once like only replace 1 string
//Can use replaceAll.......
console.log(givens.replaceAll("a", "r"));
//Or
console.log(givens.replace(/r/g, "a"));

//Booleans

console.log(givens.includes("a"));
console.log(givens.trim().startsWith("a"));
console.log(givens.endsWith("o"));

//To split

let v2 = "jabhs ahsj+ahs+ahsba";
console.log(v2.split("+"));
//Better way for changing to upper case
//console.log(v2.replace(v2[0], v2[0].toUpperCase));

//Padding

console.log(v2.padStart(25, "="));
console.log(v2.padEnd(45, "$"));

//rEAL WORD EXAMPLES

const card = function (number) {
  const str = number + "";
  const newstr = str.slice(-4);
  console.log(newstr.padStart(str.length, "*"));
};

card(34343423);

//repeat

console.log(v2.repeat(3));
