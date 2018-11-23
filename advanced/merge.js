// Algorithm :
// set noBiggerElement to true.
// we want to step through the second array and insert each element in the correct place in the first array :
//   - for each seoncd array eelement :
//       - step through each element of the first array.  compare the second-array-element to the first-array-element.
//           if the current first-array-element is strictly bigger than the second-array-element,
//             ..get the index of the first-array-element with indexOf(first-array-element). insert the current
//             second-array-element based on the index you found, the array and the second-array-element as argument.
//             .. set noBiggerElement to false
//             .. end the iteration of elements in the first array/ (we don't need to go further when inserting is done
//                                                                   as we modify the array we're iterating over,
//                    																							 which can mess with indexes and 
//                                                                   provoke eunexpected behaviors)
//         end of first array iteration
//         if noBiggerElement, push the current second-array-element to the array.
//    end of second array iteration
// All elements of the second array have been inserted in the right index in the first array, which result in a 
// merge sorted array, the first array. return the first array.              

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

console.log(merge([0, 1], [2, 5, 7, 9]))       // [0, 1, 2, 5, 7, 9]
console.log(merge([], [3, 4]))                 // [3, 4];
console.log(merge([3, 4, 5], []))              // [3, 4, 5];
console.log(merge([3, 4, 5], [1, 2, 3]))       // [1, 2, 3, 3, 4, 5]
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

