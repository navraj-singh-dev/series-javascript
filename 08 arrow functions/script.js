// arrow functions

// syntax

// arrow function openely defined and not stored
console.log(() => {
  return "arrow function";
});

// arrow function can be stored inside a variable (let, const ,var)
const sayHello = () => {
  console.log("arrow func stored in sayHello Const");
};
sayHello();

// pre-defined parameters and arguments
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 5));

// unlimited arguments using ...spread
const addV2 = (...numbers) => {
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans = ans + numbers[i];
  }
  return ans;
};
console.log(addV2(1, 1, 1, 1, 1));
