// 1. simple function in javascript
function simple_function() {
  return "hi i am function";
}
console.log(simple_function());

// function with parameters and arguments
function add(a, b) {
  let ans = a + b;
  return ans;
}
console.log(add(5, 5));

// function with unlimited arguments and paramters
// using "arguments" object.
function add_Unlimited_Parameters() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}
console.log(add_Unlimited_Parameters(1, 1, 1, 1, 1, 1, 1));

// using ...spread operator
function add_Spread_Operator(...numbers) {
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans = ans + numbers[i];
  }
  return ans;
}
console.log(add_Spread_Operator(2, 2, 2, 2, 2));
