// difference between "normal" and "arrow" function

// 1. argument keyword is not available in "arrow"
const add = () => {
  return arguments;
};
console.log(add(1, 1)); // ERROR

// 2. Hoisting (this let us access a variable or function before its definition's body )
// Hoisting is not possible in "arrow"

// sayHello(); // ERROR
const sayHello = () => {
  console.log("Hoisting is not possile in arrow func");
};
sayHello(); // This is the right way

// 3. This keyword (not usable in arrow func)
const obj = {
  property_one: 30,
  my_function: () => {
    console.log(this.property_one); // this is not usable in arrow
  },
};
obj.my_function();

// Why is this keyword not usable in arrow function ?
// Because "arrow" function has global scope, 
// it accesses.. browser's window object, so using "this"
// in arrow gives browswer's "window" object as output.
// which means we cannot access a "property" of a javascript object,
// using "this" in arrow function.

// so these are the difference in normal function and arrow function
// normal function can do all these things but arrow cannot. 