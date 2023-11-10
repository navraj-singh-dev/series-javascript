// 1. Higher Order Functions & CallBack Functions
    // a func that takes another function as a argument is called H.O.F
    // a func that returns another function as output is also called H.O.F
    // a func that is passed as a argument to H.O.F is called callback func

function add(num1, num2, callBackFunc) {
  // perform a task that takes while (2-9 secs etc.)
  let ans = num1 + num2;
//   after the above task gets completed, H.O.F will call callBackFunc
  callBackFunc(ans);
}

add(6, 6, (ans) => {
  console.log(ans);
});

// *** NOTES :
// a callback function can be "arrow" or "normal" func
// a H.O.F is mostly used for async backend operations,
// basically H.O.F is used when we are doing a task that can
// take some while to produce output, so we give it a callback func,
// which will be called when that task (which will take while to complete),
// is completed.
// ***

// 2. Function can also return a another function as output (This is also H.O.F).
function return_func(a, b) {
    let ans = a * b;
    return () => console.log(ans);
}
let return_func_output = return_func(9, 9); // now "return_func_output" has a func as value, which we can call
return_func_output(); // calling it
