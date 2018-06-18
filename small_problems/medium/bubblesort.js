function swap(array, index1, index2) {
  var firstSwapped = array[index2];
  var secondSwapped = array[index1];
  array[index1] = firstSwapped;
  array[index2] = secondSwapped;
  return array;
}

function bubbleSort(array) {
  var swapInIteration;
  do {
    swapInIteration = false;
    array.reduce(function(previousValue, currentValue, currentIndex) {
      if (previousValue > currentValue) {
        swap(array, currentIndex, currentIndex - 1);
        swapInIteration = true;
      }
      return currentValue;
    });
  } while (swapInIteration);
}