let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];
let turns = 0;

function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(" "));
  }
}

printBoard(board);
