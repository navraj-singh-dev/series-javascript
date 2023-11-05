// && (both left right needs to be true here)
// || (only one side either left or right needs to be true here)
// ! (true -> false and false -> true)

let age = 30;
let name_ = "donald trump";

if (age === 30 && name_ === "donald trump") {
  console.log("&& ran... as both conditions are true");
}
if (age === 30 || name_ === "joe biden") {
  console.log("|| ran... as one of the conditions need to be true");
}
if (!(age === 40)) {
  console.log("! ran... as it makes a boolean opposite");
}
