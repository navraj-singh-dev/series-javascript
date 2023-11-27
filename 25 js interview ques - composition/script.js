// *Composition -
// Composition means combining two or more functions together
// to create a new function, where output of one function is
// the input to another function forming a chain of functions.

// 1. making two functions
const add = (a, b) => a + b;
const square = (c) => c * c;
const double = (d) => d * 2;

// 2. composing them
function composed(function_one, function_two) {
  return function (a, b) {
    return function_two(function_one(a, b));
  };
}

const addThenSquare = composed(add, square);
console.log(addThenSquare(1, 1));

// version 2. a compostion function that accept
// unlimited functions as argument.
const add2 = (array) => array[0] + array[1];
const square2 = (c) => c * c;
const double2 = (d) => d * 2;

function unlimFuncArgs(...functions) {
  return function (...values) {
    return functions.reduce((value, func) => func(value), values);
  };
}
const result = unlimFuncArgs(add2, square2, double2);
console.log(result(2, 2));
