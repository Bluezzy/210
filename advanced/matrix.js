var matrix = [ 
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]



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
// 1. We set an empty array with 3 empty sub-arrays.
// 2. We set coordinates as x = 0 and y = 0
// 3. We iterate over the original matrix rows (by increasing x in a loop)
//     - at each step of iteration, we iterate over the matrix columns (by increasing y in a nested loop)
//     - we set newMatrix[y][x] to the element referenced by matrix[x][y]

function transpose(matrix) {
  var newMatrix = [[], [], []];
  var x;
  var y;

  for (x = 0, y = 0; x < 3; x++) {
    for (y = 0; y < 3; y++) {
      newMatrix[y][x] = matrix[x][y]
    }
  }

  return newMatrix;
}