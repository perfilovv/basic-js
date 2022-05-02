const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let v = 0; v < matrix[i].length; v++) {
      let beforeObj = matrix[i][v - 1] ? 1 : 0;
      let nextObj = matrix[i][v + 1] ? 1 : 0;
      let diagUpRightObj = 0;
      let upObj = 0;
      let diagDownLeftObj = 0; 
      let diagUpLeftObj = 0;
      let downObj = 0;
      let diagDownRightObj = 0;
      let counter = 0;
      
      if (matrix[i - 1]) {
        diagUpLeftObj = matrix[i - 1][v - 1] ? 1 : 0;
        upObj = matrix[i - 1][v] ? 1 : 0;
        diagUpRightObj = matrix[i - 1][v + 1] ? 1 : 0;
      }
      if (matrix[i + 1]) {
      diagDownLeftObj = matrix[i + 1][v - 1] ? 1 : 0;
      downObj = matrix[i + 1][v] ? 1 : 0;
      diagDownRightObj = matrix[i + 1][v + 1] ? 1 : 0; 
    }
    counter = beforeObj + nextObj + diagUpRightObj + diagUpLeftObj + upObj + diagDownRightObj + diagDownLeftObj + downObj;
    row.push(counter);
  }
  arr.push(row);
}
return arr;
}

module.exports = {
  minesweeper
};
