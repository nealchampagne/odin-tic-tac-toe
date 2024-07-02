function gameBoard() {
  let board = [];
  const rows = 3;
  const cols = 3;

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i].push('');
    }
  }

  const getBoard = () => board;

  const writeToBoard = (x,y,mark) => {
    if(getBoard()[x][y] === '') {
      getBoard()[x][y] = mark;
      return true;
    } else {
      alert('Please choose an empty square!');
      return false;
    }
  }

  return {getBoard, writeToBoard};
};

const game = (() => {
  const board = gameBoard();

  const checkWin = () => {
    const content = board.getBoard();
      for(let i = 0; i < 3; i++) {
      if(content[i][0] + content[i][1] + content[i][2] === 'XXX' ||
        content[0][i] + content[1][i] + content[2][i] === 'XXX') {
        return `Player One wins!`
      } else if (content[i][0] + content[i][1] + content[i][2] === 'OOO' ||
        content[0][i] + content[1][i] + content[2][i] === 'OOO') {
        return `Player Two wins!`;
      };
    };
    if(content[0][0] + content[1][1] + content[2][2] === 'XXX' ||
      content[0][2] + content[1][1] + content[2][0] === 'XXX') {
      return `Player One wins!`;
    } else if(content[0][0] + content[1][1] + content[2][2] === 'OOO' ||
      content[0][2] + content[1][1] + content[2][0] === 'OOO') {
      return `Player Two wins!`;
    };
    if (!content[0].includes('') &&
      !content[1].includes('') &&
      !content[2].includes(''))
      {return `It's a draw!`};
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

  const takeTurn = (x,y) => board.writeToBoard(x,y,getCurrentPlayer().mark);
  
  return {checkWin, alternateTurn, takeTurn, getCurrentPlayer, getBoard: board.getBoard};
})();

const display = () => {
  const statusDiv = document.querySelector('.status');
  const boardDiv = document.querySelector('.board');
  const resetButton = document.querySelector('.reset');

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      const square = document.createElement('button');
      square.classList.add('square');
      square.addEventListener('click', () => {
        if(game.checkWin()) {
          return;
        }
        if(game.takeTurn(i,j)) {
          square.textContent = game.getCurrentPlayer().mark
          if(game.checkWin()) {
            statusDiv.textContent = game.checkWin();
          } else {
          game.alternateTurn();
          statusDiv.textContent = `${game.getCurrentPlayer().name}'s turn`
          }
        }   
      });
      boardDiv.appendChild(square);
    }
  }

  resetButton.addEventListener('click', () => {
    location.reload();
  });
};

display();