// EXAMPLE 1 - Check if a Function is Async in JavaScript

const sum = async (a, b) => {
  return a + b;
};

if (sum.constructor.name === 'AsyncFunction') {
  // 👇️ this runs
  console.log('✅ function is async');
} else {
  console.log('⛔️ function is NOT async');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function isAsyncFunction(func) {
//   return func.constructor.name === 'AsyncFunction';
// }

// const sum = async (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// console.log(isAsyncFunction(sum)); // 👉️ true
// console.log(isAsyncFunction(subtract)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Non-async functions might also return a Promise

// // 👇️ non-async returns Promise
// function example() {
//   return new Promise(resolve => {
//     resolve(100);
//   });
// }

// console.log(example()); // 👉️ Promise {}

// console.log(example.constructor.name); // 👉️ "Function"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Function returns a Promise in JavaScript

// // ✅ Promise check
// function isPromise(p) {
//   if (typeof p === 'object' && typeof p.then === 'function') {
//     return true;
//   }

//   return false;
// }

// // ✅ Check if a function's return value is a Promise
// function returnsPromise(f) {
//   if (
//     f.constructor.name === 'AsyncFunction' ||
//     (typeof f === 'function' && isPromise(f()))
//   ) {
//     console.log('✅ Function returns promise');
//     return true;
//   }

//   console.log('⛔️ Function does NOT return promise');
//   return false;
// }

// // 👇️ Examples
// async function exampleAsync() {}
// function example() {}
// function examplePromise() {
//   return new Promise(resolve => {
//     resolve(42);
//   });
// }

// console.log(returnsPromise(exampleAsync)); // 👉️ true
// console.log(returnsPromise(example)); // 👉️ false
// console.log(returnsPromise(examplePromise)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 5 - Guarantee that the function always returns a Promise

// function example() {
//   return 42;
// }

// Promise.resolve(example()).then(value => {
//   console.log(value); // 👉️ 42
// });
