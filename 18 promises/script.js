// Promises

// A async function always returns a promise.
// Why? async tasks takes time to be done,
// and their output can be variable (either resolved or not resolved)
// for eg : database queries, api calling, url fetching etc.
// Async tasks are little time consuming and
// have variable output(resolved / not resolved) outputs.

let a = 10;
let b = 10;

async function apiCaller() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(await data.json());
}

apiCaller();

let result = a + b;
console.log(result);

// even though apicaller() is written before console.log(result), it provides
// output late and after it. console.log(result) outputs early.
// why? apicaller() is a async functions and it is performing async task,
// javascript doesnt wait for its output and runs next lines of code which is
// console.log(result) and when apicaller() has it output, javascript console.logs it.

// 2. fetch(), then(), catch(), finally()

// another old way to do async task was to use fetch() with then(), catch(), finally(),
// but these days async await is more preffered.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


// fetch() - fetches data.
// then() - if fetch gives right output without output then() runs.
// catch() - if fetch outputs some error then catch() is used.
// finally() - it runs whether fetch() gives error or right output.