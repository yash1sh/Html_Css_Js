const mapp1 = new Map([
  [1, "C"],
  [2, "java"],
  [3, "css"],
  [4, "javascript"],
  ["java", true],
  [true, "correct"],
]);

const prmt = Number(prompt("Enter the number"));
console.log(mapp1.get(prmt));
