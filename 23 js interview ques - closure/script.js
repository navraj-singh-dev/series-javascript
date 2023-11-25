// *Closure - a closure is the combination of inner function + the lexical scope
// *Lexical scope - the data(its own variables and any outer functions variables)
// that the inner function has access to is called lexical environment.
// *So a closure is a function containing a inner function, where inner function
// has access to the variables and data defined in the outer function, and also 
// its own variables and data.
// inner function has the ability to maintain the "state" of the variables,
// defined in outer function.

// *************************************
function give_name(name) {
  let name_ = name;

  // printName has access to name_, defined in outer function
  function printName() {
    console.log(name_);
  }
  return printName;
}

const printName = give_name("navraj");
printName();

// *************************************
function addCount() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}

const increment = addCount();
increment()
increment()
increment()
