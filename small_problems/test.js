function digPow(n, p){
  p--;
  var digits = String(n).split('').map(Number);
  var total = digits.reduce(function(sum, value) {  
    return sum + Math.pow(value, p++);
}, 0);
  if (Number.isInteger(total / n)) {
    return total / n;
  }
  else {
    return -1;
  }
}

function sqInRect(lng, wdth) {
  if (lng === wdth) { return null };
  var rectangle = [lng, wdth];
  var smallSide;
  var longSide = null;
  var squareSide;
  var squares = [];
  while (squareSide !== longSide) {
    rectangle.sort(function(a, b) {
      return a - b;
    });
    squareSide = rectangle[0];
    longSide = rectangle[1] - squareSide;
    squares.push(squareSide);
    rectangle = [squareSide, longSide];
  }
  squares.push(squareSide); // last square is the remaining rectangle area.
  return squares;
}

snail = function(array) {
  var n = array.length;
  var x = 0;
  var y = 0;
  var grid = [];
  var position = [x, y];
  
  while (freePosition(position, grid) || x < n) {
    
}

function freePosition(position, grid) {
  var free = true;
  grid.forEach(function(square) {
    if String(position) === String(square) {
      free = false;
    });
  return free;
}

(0, 0) (0, 1) (0, 2) (0, 3)  x remains, y increases, stops at x max or before checked square
(1, 3) (2, 3) (3, 3) y remains, x increases, stops at y max or before a checked square
(3, 2) (3, 1) (3, 0) x remains, y decreases, stops at x min or before a checked square
(2, 0) (1, 0) y remains, x decreases, stop at x min or before a checked square 
(1, 1) (1, 2) x remains, y increases, stop at y max or before a checked square
(2, 2)  y remains, x increases, stop at x max or before a checked square.
(2, 1) x remains, y decreases, stop at y min or before a checked square.

// loop :
// loop increase y, break if stop conditions ( y = n || 
// loop increase x, break if stop conditions
// loop decrease y, break if stop conditions
// loop decrease x, break if stop conditions
// ... break loop when length = n * n