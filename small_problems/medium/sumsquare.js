// input : positive integer
// output : positive integer

// rules :
// n = input number
// 1) sumSquare
//   - sum all values from 1 to n. 
//   - calculate the square of this sum.
// 2) SquareSum
//   - square all numbers from 1 to n
//   - compute their sum.

// sumSquareDifference = sumSquare - SquareSum

function sumSquareDifference(integer) {
  return sumSquare(integer) - squareSum(integer);
}

function sumSquare(integer) {
  var sum = 0;
  var i;
  for (i = 1; i <= integer; i++) {
    sum += i;
  }

  return Math.pow(sum, 2);
}

function squareSum(integer) {
  var sum = 0;
  var i;
  for (i = 1; i <= integer; i++) {
    sum += Math.pow(i, 2);
  }

  return sum;
}

sumSquareDifference(3);      // 22
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150