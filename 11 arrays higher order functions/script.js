// array's higher order functions
    // forEach(), MAP(), FIND(), findIndex(), Filter(), SPLICE(), SLICE(), includes()

const numbers = [1,2,3,4,5]

// forEach(), it doesnt return anything, it just let you perform
// some operation on every single element of the array.
numbers.forEach((num) => {
    console.log(num * 2);
})

// map(), is same as forEach, but it returns a new array
const output_map = numbers.map(num => num * 2)
console.log(output_map);

// find(), it just ouputs/finds a single element from array,
// based on some condition and return it.
const output_find = numbers.find(num => num === 4)
console.log(output_find);

// findIndex(), it is same as "find", but it returns
// the index of found element not its value.
const output_findIndex = numbers.findIndex(num => num === 4);

// filter(), it filters out elements from array based on some condition
const output_filter = numbers.filter(num => num % 2 === 0)
console.log(output_filter);

// splice(), it deletes elements from original
// array by taking indexes as arguments,
// and returns deleted elements in new array
const original_array = [1,2,3,4,5,6,7,8]
const output_splice = original_array.splice(0,3)
console.log(original_array);
console.log(output_splice);

// slice(), return a new array, it takes start:end(excluded),
// index and provides the elements from start:end(exluded) index.
const output_slice = numbers.slice(0,3);
console.log(output_slice);

// includes(), tells whether the element is present or not present
// in a array, by giving a boolean as value.
const output_includes = numbers.includes(3)
console.log(output_includes);
