const game = () => {
  const writeBoardX = (x,y) => {
    gameBoard.board[x][y] = 'X';
    if (checkWin() === 'winX') {
      console.log(`Player X wins!`);
    } else if (checkWin() === 'tie') {
      console.log(`It's a tie!`);
    };
  };

  const writeBoardO = (x,y) => {
    gameBoard.board[x][y] = 'O';
    if (checkWin() === 'winO') {
      console.log(`Player O wins!`);
    } else if (checkWin() === 'tie') {
      console.log(`It's a tie!`);
    };
  };

  const checkWin = () => {
    for(let i = 0; i < 3; i++) {
      if(gameBoard.board[i][0] + gameBoard.board[i][1] + gameBoard.board[i][2] === 'XXX' ||
        gameBoard.board[0][i] + gameBoard.board[1][i] + gameBoard.board[2][i] === 'XXX') {
        return 'winX'
      } else if (gameBoard.board[i][0] + gameBoard.board[i][1] + gameBoard.board[i][2] === 'OOO' ||
        gameBoard.board[0][i] + gameBoard.board[1][i] + gameBoard.board[2][i] === 'OOO') {
        return 'winO';
      };
    };
    if(gameBoard.board[0][0] + gameBoard.board[1][1] + gameBoard.board[2][2] === 'XXX' ||
      gameBoard.board[0[2]] + gameBoard.board[1][1] + gameBoard.board[2][0] === 'XXX') {
      return 'winX';
    } else if(gameBoard.board[0][0] + gameBoard.board[1][1] + gameBoard.board[2][2] === 'OOO' ||
      gameBoard.board[0][2] + gameBoard.board[1][1] + gameBoard.board[2][0] === 'OOO') {
      return 'winO';
    };
    if (gameBoard.board.length === 9) {
      return 'tie';
    } else {return false};
  };

  return {writeBoardX, writeBoardO, checkWin}
};

const gameBoard = (() => {
  const board = [[,,],[,,],[,,]];
  return {board};
})();

const player = () => {};

const display = () => {};