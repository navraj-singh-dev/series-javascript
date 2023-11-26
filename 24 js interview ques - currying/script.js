// => Currying :
// When a function which has multiple arguments/parameters is
// transformed into chain of nested functions, where each function
// taking a single argument and when all arguments are provided
// only then output is outputted is called currying.
// The chain of functions are invoked progressively by giving one
// argument at a time.

// example 1.
function add(a, b, c) {
  return a + b + c;
}
console.log(add(3, 3, 3));
// Now this function is not currying and it will output NaN if some argument
// is not provided.

// => Converting this func to Currying Version
function addCurrying(a) {
  return function giveB(b) {
    return function giveC(c) {
      return a + b + c;
    };
  };
}
console.log(addCurrying(1)(1)(1));

// example 2
function sendEmail(give_id) {
  return function (subject) {
    return function (body) {
      console.log(`To : ${give_id}\nSubject: ${subject}\nBody: ${body}`);
    };
  };
}
sendEmail("tinkupreet@gmail.com")("here is the subject")("I am the body");

// now in JS ES6 we use arrow functions
// example 1. in arrow functions
const add_arrow = (a) => (b) => (c) => a + b + c;
console.log(add_arrow(1)(1)(1));

// example 2. in arrow functions
const sendEmailArrow = (give_id) => (subject) => (body) =>
  console.log(`To : ${give_id}\nSubject: ${subject}\nBody: ${body}`);
sendEmailArrow("arrow@gmail.com")("here is the subject arrow")(
  "I am the body arrow"
);
