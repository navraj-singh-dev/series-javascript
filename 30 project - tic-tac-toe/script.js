let current_symbol = "X";
let array = Array(9).fill(null);
console.log(array);

// reload screen
async function reload() {
  await location.reload();
}

function checkWinner() {
  // These are all the patterns make a winner
  if (
    (array[0] !== null && array[0] === array[1] && array[1] === array[2]) ||
    (array[3] !== null && array[3] === array[4] && array[4] === array[5]) ||
    (array[6] !== null && array[6] === array[7] && array[7] === array[8]) ||
    (array[0] !== null && array[0] === array[3] && array[3] === array[6]) ||
    (array[1] !== null && array[1] === array[4] && array[4] === array[7]) ||
    (array[2] !== null && array[2] === array[5] && array[5] === array[8]) ||
    (array[0] !== null && array[0] === array[4] && array[4] === array[8]) ||
    (array[2] !== null && array[2] === array[4] && array[4] === array[6])
  ) {
    setTimeout(
      () => document.write(`<h2>Winner Is : ${current_symbol} </h2>`),
      1000
    );
    // reload after 2.5 seconds
    setTimeout(reload, 2500);
    return;
  }
  if (!array.some((x) => x === null)) {
    document.write(`<h2>Winner is No-One, Its a Draw!</h2>`);
  }
}

function handleclick(block) {
  // get the id of column box where click happend
  const block_id = Number(block.id);
  // if block has either "X" or "0" return
  if (array[block_id] !== null) {
    return;
  }
  // put the current_symbol to that column box
  array[block_id] = current_symbol;
  block.innerText = current_symbol;
  // after each new click check if somebody won or draw
  checkWinner();
  // change the symbol after each click (if "X" was the 1st turn then
  // "0" must be the second turn)
  current_symbol = current_symbol === "X" ? "O" : "X";
}
