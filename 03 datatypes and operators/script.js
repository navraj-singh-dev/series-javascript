// datatypes
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. object

// 1. number (it is a mixture of : int, float, long, double )
let num_1 = 20;
let num_2 = 30;
console.log(num_1 + num_2);

// 2. string
let str_1 = "string_one";
let str_2 = "string_two";
console.log(str_1 + " " + str_2); // concatenation will happen using "+""

// 3. boolean ( true -> 1, false -> 0)
let isUserBanned = true;
if (isUserBanned) {
  console.log("User is Banned");
}
// js consider false as number 0 and true as number 1, so we can perform arithmetic on them actually
let considered_false = 0;
let considered_true = 1;

console.log(considered_false * 100); // output : 0
console.log(considered_true * 100); // output : 100
// weird thing i learned :
// "number_value_put_inside_string" + NumberDataType = Number
// "number_value_put_inside_string" * NumberDataType = Number
// "alphabet_value_put_inside_string" * NumberDataType = Nan

// 4. Null (it takes some space and tells that this variable can have any dataype as value)
let nullDataType = null;
console.log(nullDataType);

// 5. undefined ( it takes no space and tells that it literally has no value, nothing, emtpy..)
let undefinedDataType = undefined;
console.log(undefinedDataType);

// 6. object ( it doesnt need class definition just use {} and thats it )
let obj_one = {
  human: true,
  firstName: "string",
  smart: true,
  iq: 135,
};
console.log(obj_one);
// object can store variety of datatypes inside fields,
// where each field has a (key : value) pair,
// each field (key:value pair) is seperated by comma.

// 2. operators (arithmetic)
// +
// -
// /
// *

// well these are simple math operators dont need any code to explain basic math now ^_^
