// Create a sort function that takes an array of n integest and sort it from smallest to biggest.
// Ex: sort([1, 12, 3, 4, 10, 5]) => [1, 3, 4, 5, 10, 12]

// Algorithm :
//  set a variable named sorted , a variable named noswap, and assign it respectively to false and true.
//  while !sorted
//    - set noSwap to true
//    - step through all the integers except the last.
//       - if it's strictly bigger than the next integer (at currentindex + 1) : 
//            swap the elements*(helper function, see swapByIndex below)
//            set noswap to false
//       end of iteration
//    set sorted to noSwap
// return the array.


// given an array and two indexes :
//   [1, 4, 3, 2] , 1, 2
//   swap(a, 1, 2) => [1, 3, 4, 2]


// swapByIndex Algorithm (arr, i, j)
// set a var named temp and assign it to arr[i]
// set arr[i] to arr[j]
// set arr[j] to temp
// return the arr

function swapByIndex(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function sort(integers) {
  var noSwap;
  var sorted = false;
  while(!sorted) {
    noSwap = true;
    for (i = 0; i < integers.length - 1; i++) {
      if (integers[i] > integers[i + 1]) {
        swapByIndex(integers, i, i + 1);
        noSwap = false;
      }
    }
    sorted = noSwap;
  }
  return integers;
}           