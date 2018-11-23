function mergeSort(array) {
  var subArray1;
  var subArray2;

  if (array.length === 1) {
    return array;
  }

  subArray1 = array.slice(0, array.length / 2);
  subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}


function merge(arr1, arr2) {
	if (emptyArray(arr1, arr2)) { return arr1.concat(arr2); }

	var noBiggerElement = true;
	var i;
	var j;
	var arr1copy = arr1.slice();
	var arr2el;
	var arr1el;
	var correctInsertingIndex;

	for (j = 0; j < arr2.length; j++) {
		arr2el = arr2[j]; 
		for (i = 0; i < arr1copy.length; i++) {
			arr1el = arr1copy[i];
			if (arr1el > arr2el) {
				correctInsertingIndex = arr1copy.indexOf(arr1el);
				insert(arr1copy, correctInsertingIndex, arr2el);
				noBiggerElement = false;
				break;
			}
		}
		if (noBiggerElement) { arr1copy.push(arr2el); }
	}

	return arr1copy;
}

function insert(arr, index, el) {
	arr.splice(index, 0, el);
	return arr;
}

function emptyArray(arr1, arr2) {
	return arr1.length === 0 || arr2.length === 0;
}