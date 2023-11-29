// IIFE - Immediately Invoked Function Expression
// 1. reduce pollution in global namespace.
// 2. execute an sync function.

(function add(a, b) {
  console.log(a + b);
})(4, 4);

((a, b) => {
  console.log(a - b);
})(4, 4);


