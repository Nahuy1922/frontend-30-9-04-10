
// let / const
let x = 10;
const PI = 3.14;

// Arrow function + Default parameters
const sum = (a, b = 0) => a + b;
console.log("Sum:", sum(5, 7));

// Template literals
const name = "Huy";
console.log(`Hello, ${name}!`);

// Destructuring
const user = { username: "Huy", age: 22 };
const { username, age } = user;
console.log(`User: ${username}, Age: ${age}`);

// Spread / Rest
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5]; // spread
console.log("Spread array:", arr2);

const total = (...nums) => nums.reduce((a, b) => a + b, 0); // rest
console.log("Rest sum:", total(1, 2, 3, 4));

// Class
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
new Person("Huy").greet();

// Promise
new Promise((resolve) => setTimeout(() => resolve("Promise done!"), 500))
  .then(console.log);

// for...of
for (const n of arr2) {
  console.log("for...of:", n);
}

// ================== ES7 (2016) ==================
console.log("Includes:", [1, 2, 3].includes(2));
console.log("Power:", 2 ** 3);

// ================== ES8 (2017) ==================
(async () => {
  const asyncTask = () => Promise.resolve("Async/Await works!");
  console.log(await asyncTask());
})();

console.log("Object.entries:", Object.entries(user));
console.log("PadStart:", "5".padStart(3, "0"));
console.log("PadEnd:", "5".padEnd(3, "0"));

// ================== ES9 (2018) ==================
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 }; // spread for object
console.log("Spread object:", newObj);

Promise.reject("Error")
  .finally(() => console.log("Promise.finally always runs"))
  .catch(() => {}); // tránh crash

// ================== ES10 (2019) ==================
const nested = [1, [2, [3, 4]]];
console.log("Flat array:", nested.flat(2));

console.log("FromEntries:", Object.fromEntries([["x", 1], ["y", 2]]));
console.log("Trim:", "   hello   ".trimStart().trimEnd());

// ================== ES11 (2020) ==================
const profile = { info: { email: "test@mail.com" } };
console.log("Optional chaining:", profile?.info?.email);
console.log("Nullish coalescing:", null ?? "default");

const big = 123456789012345678901234567890n;
console.log("BigInt:", big + 10n);

Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject("fail")
]).then(console.log);

// Dynamic import
import("./utils.js").then(m => console.log("Dynamic import sum:", m.sum(3, 4)));

// ================== ES12 (2021) ==================
console.log("ReplaceAll:", "abc abc".replaceAll("abc", "xyz"));

let a;
a ||= 10; // logical assignment
console.log("Logical assignment:", a);

const million = 1_000_000;
console.log("Numeric separator:", million);

// ================== ES13 (2022) ==================
// Top-level await (chạy Node.js 16+ với type: "module" trong package.json)
const asyncHello = await Promise.resolve("Hello with top-level await");
console.log(asyncHello);

console.log("Object.hasOwn:", Object.hasOwn({ foo: 123 }, "foo"));
