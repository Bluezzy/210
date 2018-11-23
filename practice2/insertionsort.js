// MAIN ALGORITHM
// 1. variable named result; assign it to empty array.
// 2. step through the array. For each element :
//    - insertInOrder(result, currentElement)* (see insertInOrder algorithm below)
//    - 
// 3. return result

function insertSort(array) { // non-mutating function
  var result = [];
  var i;
  for (i = 0; i < array.length; i++) {
    insertInOrder(result, array[i]);
  }
  return result;
}

// BRAINSTORMING
// [3, 2, 6, 5, 9, 8, 4, 11, 1] and [3]
// for each element of the array starting from i = 1 : 
//   2 =>
//   step through the integers. 
//     the first one is 3, 2 is smaller :
//     move 3 to the right and insert 2 where 3 was : (arr.splice(index of 3, 0, value)
//     [2, 3]


// INSERT IN ORDER ALGORITHM

// Insert Algorithm of an element in a sorted Array:
// [2, 4, 7, 8, 11] => 9 
// set noBiggerValue to true.
// step through the array. find the index of the first bigger element than 9 : insert 9 on that index. Details below :
//   - 2 < 9, keep going (i=0) ()
//   - 4 < 9, keep going (i=1)
//   - 7 < 9, keep going (i=2)
//   - 8 < 9, keep going (i=3)
//   - 11 > 9 : insert 9 at i = 4, and set noBiggerValue to false
// end of iteration.
// if noBiggerValue, push the value.
// return the array

function insertInOrder(sortedArray, value) { // mutate the original array
  var i;
  var noBiggerValue = true;
  var length = sortedArray.length;
  for (i = 0; i < length; i++) {
    if (sortedArray[i] > value) {
      insert(sortedArray, value, i);
      noBiggerValue = false;
      break;
    }
  }
  if (noBiggerValue) { sortedArray.push(value); }

  return sortedArray;
}

function insert(array, element, index) { // mutate the original array, assuming array length >= 1.
  array.splice(index, 0, element);
  return array;
}