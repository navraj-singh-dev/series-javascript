// if/else and ternary operators are used,
// in javascript for controlling the,
// flow of a program.

// 1. if/else (very easy, but lets implement)

let votes = 60;
let name_ = "joe biden";
// let name_ = "donald trump";

if (votes >= 60 && votes <= 100) {
  if (name_ === "donald trump") {
    console.log("donald trump wins in 2024");
  } else if (name_ === "joe biden") {
    console.log("joe biden wins in 2024");
  }
} else if (votes <= 30 && votes >= 0) {
  if (name_ === "donald trump") {
    console.log("donald trump loses in 2024");
  } else if (name_ === "joe biden") {
    console.log("joe biden loses in 2024");
  }
} else {
  console.log("John Cena Won in 2024");
}

// 2. ternary operator (xxxx ? xxxx : xxxx)
votes >= 60 ? console.log("donald trump wins") : console.log("trump loses");

// 3. switch cases (good for multiple cases and one condition)
let year = 6024

switch (year) {
    case 3024: console.log("AI ended humans");
    break;
    case 4024: console.log("AI created a new planet");
    break;
    case 5024: console.log("AI destroyed itself");
    break;
    default: console.log("world is safe");
}
