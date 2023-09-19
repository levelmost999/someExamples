function minimax(board, depth, isMaximizingPlayer) {
  const result = checkWin(board);
  if (result !== null) {
    if (result === "X") {
      return 10 - depth;
    } else if (result === "O") {
      return depth - 10;
    } else {
      return 0;
    }
  }

  if (isMaximizingPlayer) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          board[i][j] = "X";
          const score = minimax(board, depth + 1, false);
          board[i][j] = "";
          bestScore = Math.max(bestScore, score);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          board[i][j] = "O";
          const score = minimax(board, depth + 1, true);
          board[i][j] = "";
          bestScore = Math.min(bestScore, score);
        }
      }
    }
    return bestScore;
  }
}

function getBestMove(board) {
  let bestScore = -Infinity;
  let bestMove = null;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        board[i][j] = "X";
        const score = minimax(board, 0, false);
        board[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          bestMove = [i, j];
        }
      }
    }
  }
  return bestMove;
}
