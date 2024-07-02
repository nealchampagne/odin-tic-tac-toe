const game = (() => {
  // const getValue = () => ;

  const printBoard = () => {
    const gridState = gameBoard.board.map((row) => 
      row.map((cell) => cell))
    console.log(gridState);
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
      gameBoard.board[0][2] + gameBoard.board[1][1] + gameBoard.board[2][0] === 'XXX') {
      return 'winX';
    } else if(gameBoard.board[0][0] + gameBoard.board[1][1] + gameBoard.board[2][2] === 'OOO' ||
      gameBoard.board[0][2] + gameBoard.board[1][1] + gameBoard.board[2][0] === 'OOO') {
      return 'winO';
    };
    if (!gameBoard.board[0].includes('-') &&
      !gameBoard.board[1].includes('-') &&
      !gameBoard.board[2].includes('-'))
      {return 'draw'};
  };

  const players = [
    {
      name: 'Player One',
      mark: 'X'
    },
    {
      name: 'Player Two',
      mark: 'O'
    }
  ];

  let currentPlayer = players[0];

  const alternateTurn = () => {
    currentPlayer = currentPlayer == players[0] ? players[1] : players[0];
  };

  const getCurrentPlayer = () => currentPlayer;

  const writeBoard = (x,y,mark) => {
    gameBoard.board[x][y] = mark;
    if (checkWin() === 'winX') {
      console.log(`Player One wins!`);
    } else if (checkWin() === 'winO') {
      console.log(`Player Two wins!`);
    } else if (checkWin() === 'draw') {
      console.log(`It's a draw!`);
    };
    printBoard();
    alternateTurn();
  };

  return {writeBoard, printBoard, currentPlayer, getCurrentPlayer, alternateTurn};
})();

const gameBoard = (() => {
  const board = [['-','-','-'],['-','-','-'],['-','-','-']];
  console.log(board);
  return {board};
})();

const display = () => {};