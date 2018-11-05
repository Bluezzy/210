// arr.length = 11, currentLength = arr.length, middleIndex = 5, desiredElement is at index = 9

// arr[middleIndex] < desiredElement :
// currentLength = Math.floor(currentLength / 2);
// middleIndex += Math.Floor(currentLength / 2);

// arr[middleIndex] > desiredElement :
// currentLength = Math.floor(currentLength / 2);
// middleIndex -= Math.floor(currentLength / 2);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// desired element : 2

// middleIndex = 5;
// element : arr[midddleIndex] => 6
// [1, 2, 3, 4, 5]; => middleIndex should be 2, which is middleIndex 

// ALGORITHM 
// 1. assign the middle index of the array to the variable middleIndex. 
// 2. while element in that index is different than the desired Element,
//    currentLength = Math.floor(currentLength / 2);
//      if arr[middleIndex] < desiredElement :     
//         middleIndex += Math.Floor(currentLength / 2);
//      else if arr[middleIndex] > desiredElement :
//         middleIndex -= Math.floor(currentLength / 2);
// 3. return middleIndex

function binarySearch(array, desiredElement) {
  var middleIndex = Math.floor(array.length / 2);
  var currentLength = array.length;
  while (array[middleIndex] !== desiredElement) {
    currentLength = Math.floor(currentLength / 2);
    if (array[middleIndex] < desiredElement) {
      middleIndex += Math.floor(currentLength / 2);
    } else {
      middleIndex -= Math.ceil(currentLength / 2);
    }
    debugger;
  }

  return middleIndex;
}

// if length is odd like 5 => ['a', 'b', 'c', 'd', 'e']
// middle elemeent is 'c', middleIndex being 2 : Math.floor(5 / 2)
// if length is even like 6 => ['a', 'b', 'c', 'd', 'e', 'f']
// middle element is 3 => Math.floor( 6 / 2 )
// which means odd or even length is irrelevant.
// so middleindex is always Math.floor (arr.length / 2)