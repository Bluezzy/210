//[[1, 5, 8], [4, 7, 2], [3, 9, 6]]

//[[1, 4, 3], [5, 7, 9], [8, 2, 6]]


// [0, 0] [0, 1] [0, 2] [1, 0] [1, 1] [1, 2] [2, 0] [2, 1] [2, 2]

// [0, 0] [1, 0] [2, 0] [0, 1] [1, 1] [2, 1] [0, 2] [1, 2] [2, 2]



// y = 0

//   x = 0
//   x = 1
//   X = 2


// y = 1

//   x = 0
//   x = 1
//   x = 2


// y = 2

//   x = 0
//   x = 1
//   x = 2



// ALGORITHM
// 1. We set an empty array with x empty sub-arrays.
// 2. We set coordinates as row = 0 and column = 0
// 3. We iterate over the original matrix rows (by increasing x in a loop)
//     - at each step of iteration, we iterate over the matrix columns (by increasing y in a nested loop)
//     - we set newMatrix[column][row] to the element referenced by matrix[row][column]

function transpose(matrix) {
  var x = matrix.length;
  var y = matrix[0].length;
  var newMatrix = fillEmptySubArrays(y);
  var row;
  var column;

  for (row = 0, column = 0; row < x; row++) {
    for (column = 0; column < y; column++) {
      newMatrix[column][row] = matrix[row][column];
    }
  }

  return newMatrix;
}

function fillEmptySubArrays(n) {
  var i;
  var result = [];
  for (i = 0; i < n; i++) {
    result.push([]);
  }
  return result;
}

// ROTATE MATRIX

// [1, 2, 3, 4],
// [5, 4, 3, 2],
// [6, 7, 8, 9],

// [matrix[2][0], matrix[1][0]] [m] [] []

// [6, 5, 1], [7, 4, 2], [8, 3, 3], [9, 2, 4]

// [(2, 0), (1, 0), (0, 0)] [(2, 1), (1, 1), (0, 1)] 
// [(0, 0), (1, 0), (2, 0)] [(1, 0), (1, 1), (1, 2)] 

// y = 0,      
//    x = length             x--
//    x = 1,              x--
//    x = 0       
//                        Y++
// y = 1,
//    x = length
// ...

function rotate(matrix) {
  var y = matrix[0].length;
  var x = matrix.length;
  var newMatrix = getMatrix(y, x);

  for (column = 0; column < y; column++) {
    for (row = x - 1; row >= 0; row--) {
      fillMatrix(newMatrix, matrix[row][column]);
    }
  }

  return newMatrix;
}


function getMatrix(x, y) {
  var result = fillEmptySubArrays(x);
  result.forEach(function(subarray) {
    subarray.length = y;
  });
  return result;
}

function fillMatrix(incompleteMatrix, value) {
  var i;
  var j;
  var done = false;
  var square;
  for (i = 0; i < incompleteMatrix.length; i++) {
    for (j = 0; j < incompleteMatrix[0].length; j++) {  
      if (!incompleteMatrix[i][j]) {
        incompleteMatrix[i][j] = value;
        done = true;
        break;
      }
    }
    if (done) { break; }
  }

  return incompleteMatrix;
}

var m = [[1, 5, 8, 9], 
         [2, 4, 6, 8], 
         [4, 3, 2, 1]]; 

      // [4, 2, 1], 
      // [3, 4, 5], 
      // [2, 6, 8], 
      // [1, 8, 9]

// 2,0  1,0  0,0  
// 2,1  1,1  0,1  
// 2,2  1,2  0,2  
// 2,3  1,3  0,3  
// 2,4  1,4  0,4





