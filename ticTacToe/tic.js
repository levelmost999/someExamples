//All the situations of winning the game
const winingConditions = [
  ["b1", "b2", "b3"],
  ["b4", "b5", "b6"],
  ["b7", "b8", "b9"],
  ["b1", "b4", "b7"],
  ["b2", "b5", "b8"],
  ["b3", "b6", "b9"],
  ["b1", "b5", "b9"],
  ["b3", "b5", "b7"],
];

//Player one's chess piece position
const playerOne = [];
//Player two's chess piece position
const playerTwo = [];
//current player
let currentPlayer = 1;

//Judge whether the player has won the game
const judgeWinning = (currentClass) => {
  return winingConditions.some((combination) => {
    return combination.every((item) => {
      return currentClass.indexOf(item) > -1;
    });
  });
};
//No clicking on all chessboards
const disableAll = () => {
  const allChess = document.querySelectorAll("input");
  allChess.forEach((item) => {
    item.disabled = true;
  });
};

//match tie
const matchTie = () => {
  document.getElementById("print").innerHTML = "Match Tie";
  window.alert("Match Tie");
};

// Function to reset game
const reset = () => {
  location.reload();
  const allChess = document.querySelectorAll("input");
  allChess.forEach((item) => {
    item.disabled = false;
  });
};

//current player's click position
const DropChess = (_this) => {
  currentPlayer === 1 ? playerOne.push(_this.id) : playerTwo.push(_this.id);
  _this.value = currentPlayer === 1 ? "X" : "O";
  _this.disabled = true;
  const win = judgeWinning(currentPlayer === 1 ? playerOne : playerTwo);
  if (win) {
    alert(`Player ${currentPlayer === 1 ? "playerOne" : "playerTwo"} won!`);
    disableAll();
  } else {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    playerOne.length + playerTwo.length === 9 ? matchTie() : "";
  }
};
