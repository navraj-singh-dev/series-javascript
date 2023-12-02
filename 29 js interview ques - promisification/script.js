// Promisification :
// it is the transformation of a callback function to return a promise.
// before es6 callbacks were used to handle async tasks and async/await/promise
// were not used, so promisification is the way to transform those callback
// functions to return a promise.

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}
