function arraysEqual(arr1, arr2) {
	var i;

	if (arr1.length !== arr2.length) { return false; }

	for (i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) { return false; }
	}

	return true;
}

function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNof(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

function endsOf(beginningArr, endingArr) {
  return [firstElementOf(beginningArr), lastElementOf(endingArr)];
}

function oddElementsOf(arr) {
  var newArr = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (i % 2 == 1) { newArr.push(arr[i]); }
  }
  return newArr;
}

function combinedArray(even, odd) {
  var result = [];
  var i;
  for (i = 0; i < even.length; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }
  return result;
}

function mirrored(array) {
  var firstHalf = array;
  var secondHalf = [];
  for (i = array.length - 1; i >= 0; i--) {
    secondHalf.push(array[i]);
  }
  return firstHalf.concat(secondHalf);
}

function sortDescending(arr) {
  var result = arr.slice();
  result.sort(function(a, b) {
    return b - a;
  })
  return result;
}

function matrixSums(arr) {
  sumsArray = [];
  var i;
  var j;
  var sum;
  for (i = 0; i < arr.length; i++) {
    sum = 0;
    for (j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    sumsArray[i] = sum;
  }
  return sumsArray;
}

function uniqueElements(arr) {
  var uniques = [];
  var len = arr.length;
  var i;

  for (i = 0; i < len; i += 1) {
    if (uniques.indexOf(arr[i]) === -1) {
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

function missing(numbers) {
  var result = [];
  var i;
  for (i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    if (numbers.indexOf(i) === -1) { result.push(i)}
  }
return result;
}










//