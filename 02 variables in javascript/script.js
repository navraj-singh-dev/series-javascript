// variables are of three type in js
// var, let, const

// 1. var (global scope, modifiable after initialization, can be initialized without providing value).
var name = "string";
var age = 19;
var age_2 = 19;
console.log(age + age_2);
// modifiable :
// age = 40 || possible and fine to do.

// let (local scope, modifiable after initialization, can be initialized without providing value).
let name = "string";
let num_one = 19;
let num_two = 19;
console.log(num_one + num_two);
// modifiable :
// num_one = 400 || possible and fine to do.

// const (local scope, * value not modifiable after initialization, *cannot be initialized without providing value).
const name = "string";
const one = 19;
const two = 19;
console.log(one + two);
// not modifiable :
// one = 300 || error not possible
