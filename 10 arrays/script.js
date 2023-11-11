// arrays
    // in JS "array" are "heterogeneous".
    // negative indexes are allowed.
    // pop(), push(), slice(), indexOf(), reverse(), length. will be studied here.
    // "const array's" elements can be changed, updated, removed, inserted
    // but "const array" cannot be reassigned.

const heterogeneous = ["string", 90, true, {obj : true}, 80, 80]

console.log(heterogeneous.reverse()); // reverse array
console.log(heterogeneous.reverse()); // unreverse array bu reversing it again
console.log(heterogeneous.pop()); // delete last element of array
heterogeneous.push("new string") // add new element to last of array
console.log(heterogeneous);
console.log(heterogeneous.indexOf("new string")); // get index of a element by value
console.log(heterogeneous.slice(0, 3)); // get a contiguous sub-array
console.log(heterogeneous.slice(-3, -1)); // get a contiguous sub-array using negative index
console.log(heterogeneous.length); // get the length of a iterable

// using array[index] notation to select and update individual element
heterogeneous[0] = "i got changed"
console.log(heterogeneous);
