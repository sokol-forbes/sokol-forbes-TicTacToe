$(document).ready(() => {
  const winCells = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const winCountRequered = 3;

  let turn = true;
  let gameOver = false; 

  

  const checkWin = function checkWin() { 
    for (let i = 0; i < winCells.length; i += 1) {
      let winCountX = 0; 
      let winCountO = 0;

      for (let j = 0; j < winCells[i].length; j += 1) {
        if ($(`#cell-${winCells[i][j]}`).children().html() === 'X') winCountX += 1;
        if ($(`#cell-${winCells[i][j]}`).children().html() === 'O') winCountO += 1;
      }
      if (winCountX >= winCountRequered) {
        $(`#total`).children().html('Win X'); 
        console.log('win X!');
        gameOver = true; 

        break;
      }
      if (winCountO >= winCountRequered) {
        $(`#total`).children().html('Win O');
        console.log('win O!'); 
        gameOver = true;
        
        break; 
      }
    }
    
    let occupedCellsCount = 0;
    for (let i = 1; i <= 9; i += 1) {
      if ($(`#cell-${i}`).children().html() !== '')
        occupedCellsCount += 1;
    }

    if (occupedCellsCount === 9 && !gameOver) {
      $(`#total`).children().html(' Draw');
      console.log('draw!');
      gameOver = true;
    }
  }

  const init = function init() {
    for (let i = 1; i <= 9; i += 1) {
      $(`#cell-${i}`).click(function () {
        if ($(this).children().html() === '' && gameOver !== true) {
          turn
          ? $(this).children().html('X')
          : $(this).children().html('O');
          turn = !turn;
          checkWin();
        } 
      });
    }
    $(`#clear`).click(function () {
      for (let i = 1; i <= 9; i += 1) {
        $(`#cell-${i}`).children().html('');
        $(`#total`).children().html('');

        gameOver = false;
      }
    });
  }

  init();
});
