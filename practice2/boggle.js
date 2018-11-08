function getSquarePositions(board, letter) {
  var positions = [];
  var x;
  var y;
  for (x = 0; x < board.length; x++) {
    for (y = 0; y < board.length; y++) {
      if (board[x][y] === letter) {
        positions.push( {x: x, y: y})
      }
    }
  }
  return positions;
}

function getAdjacentPositions(squarePosition) {
  return [upLeft(squarePosition), up(squarePosition), upRight(squarePosition),
          left(squarePosition), right(squarePosition),
          downLeft(squarePosition), down(squarePosition), downRight(squarePosition)];
}

function getAllValidAdjacentPositions(startingPositions, board, freeSquare) {
  var x;
  var y;
  return startingPositions.map(function(startingPosition) {
    return getAdjacentPositions(startingPosition).filter(function(currentAdjacentPosition) {
      x = currentAdjacentPosition.x;
      y = currentAdjacentPosition.y;
      if (x < 0 || y < 0 || x >= board.length || y >= board.length) { return false; }
      return board[x][y] === seekedLetter;
    });
  });
}

function labyrinth(board, startingPoint, exitPoint)

function up(squarePosition) {
  return {x: squarePosition.x - 1, y: squarePosition.y} 
}

function down(squarePosition) {
  return {x: squarePosition.x + 1, y: squarePosition.y} 
}

function left(squarePosition) {
  return {x: squarePosition.x, y: squarePosition.y - 1} 
}

function right(squarePosition) {
  return {x: squarePosition.x , y: squarePosition.y + 1} 
}

function upLeft(squarePosition) { 
  return up(left(squarePosition));
}

function upRight(squarePosition) {
  return up(right(squarePosition));
}

function downLeft(squarePosition) {
  return down(left(squarePosition));
}

function downRight(squarePosition) {
  return down(right(squarePosition));
}

var board = [
var a;
var word = 'DEN'
var paths = [];
var startingPositions = getSquarePositions(board, 'D');


