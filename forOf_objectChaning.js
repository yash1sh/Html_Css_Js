const menu = [1, 2, 3, 4, 5, 6, 7, "name"];

for (const items of menu) console.log(items);
for (const item of menu.entries) console.log(item);
// what entries are
console.log([...menu.entries]);

// making it like a menu

for (const item of menu.entries) console.group(`${item[0] + 1} : ${item[1]}`);

// Or ---Better way
for (const [a, l] of menu.entries) console.log(`${a}+1 : $l`);

//Object chaining
const obj = {
  name: "yash",
  age: 49,
  mid: {
    name: "ss",
    last: "shetty",
  },
};
console.log(obj.mid?.name);

for (const item of menu) {
  const dd = obj.mid[item];
  console.log(dd);
}

const user = [{ name: "yash", email: "@gg.com" }];
console.log(user[0]?.name ?? "No user foud");

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.assign(obj));
