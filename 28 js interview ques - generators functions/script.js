// 1. Iterators
// Iterator is an object which defines a sequence(range of numbers, arrays)
// and returns a value upon its termination.

// or We can say :

// Iterator is any object that implements next() method and next() method
// must return a object which has two properties : value and done.

// Value : next value in sequence
// Done : it is true or false where true represents that sequence is
// completely consumed.

// Iterator Code:
// 1. it always has next(value, done)
// 2. always return a object as output {value, done}
// 3. next() is inside a object as property and it is implemented
//    by us, using object literal.
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  // variables/data
  let startIndex = start;
  let iterationCount = 0;

  // object to be returned by this iterator
  // this object always has next()
  const rangeIterator = {
    next: function () {
      let result;
      if (startIndex < end) {
        result = { value: startIndex, done: false };
        startIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };

  return rangeIterator;
}

const range_iterator = makeRangeIterator(0, 5, 1);

let result = range_iterator.next();
while (!result.done) {
  console.log(result.value);
  result = range_iterator.next();
}

// 2. Generator Function and yield keyword

/*

Generators : Generator functions are special type of iterator functions.
             Making a iterator function from scratch is very tedious
             process, so generators provide a straightforward approach
             where you use "function* + yield syntax".
             Generator functions also have "next()" method.

Yield : 1. When a generator encounter "yield" it pauses 
        execution and value after yield eg: yield "1" or "2" or "3" 
        is returned to the caller of next().
        2. When next() is called again, the generator resumes again from
        the point where it was paused and contines execution until
        "yield" is encountered then it pauses again.
        3. Yield can be written multiple times in generator func.

*/

function* makeRangeIteratorGenerator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    yield i;
  }
  return iterationCount;
}

let output_of_generator = makeRangeIteratorGenerator(0, 10, 1);
console.log(output_of_generator);
let output = output_of_generator.next();
while (!output.done) {
  console.log(output.value);
  output = output_of_generator.next();
}
