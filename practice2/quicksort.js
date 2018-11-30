// Algorithm
// 1. if the length of the array is less than 1, return the array.
// 2.set pivotIndex to the index of last element of the array.
// 3. set leftPointer to  0.
// 4. set rightPointer to array.length - 1
// 5. loop and swap
//       while the element referenced by leftPointer is strictly lesser than the element referenced by pivotIndex :
//          - increase leftPointer, break if crossed
//       if not crossed :
//       while the element referenced by rightPointer is equal or bigger than the element referenced by pivotIndex :
//          - decrease rightPointer, break if crossed
//       if not crossed : swap elements referenced by pointer.
//       else, break
// 6. set pivotIndex to rightPointer or leftPointer.
// 7. insert(array, array.pop(), pivotIndex)
// 8. return a concatenation of :
//     - the recursive solution of the left partition,
//     -  [pivot],
//     - the recursive solution of the right partition

function quicksort(arr) {
	if (arr.length <= 1) { return arr; }
	var pivotIndex = arr.length - 1;
	var leftPointer = 0;
	var rightPointer = pivotIndex;

	do {
		while (arr[leftPointer] < arr[pivotIndex] && !crossed(leftPointer, rightPointer)) {
			leftPointer++;
		}

		if (!crossed(leftPointer, rightPointer)) {
			while (arr[rightPointer] >= arr[pivotIndex] && !crossed(leftPointer, rightPointer)) {
			  rightPointer--;
		  }
		}

		if (!crossed(leftPointer, rightPointer)) {
			swap(arr, leftPointer, rightPointer);
		}
	} while (!crossed(leftPointer, rightPointer));

	pivotIndex = rightPointer;
	insert(arr, arr.pop(), pivotIndex);

	var leftPartition = getLeftPartition(arr, pivotIndex);
	var rightPartition = getRightPartition(arr, pivotIndex);
	var pivot = arr[pivotIndex];

	return quicksort(leftPartition).concat(pivot).concat(quicksort(rightPartition));
}

function crossed(leftPointer, rightPointer) {
	return leftPointer === rightPointer;
}

function loopAndSwap(leftPointer, rightPointer, pivotIndex, arr) {
}

function insert(array, value, index) {
	array.splice(index, 0, value);
	return array;
}

function getLeftPartition(array, pivotIndex) {
	return array.slice(0, pivotIndex);
}

function getRightPartition(array, pivotIndex) {
	return array.slice(pivotIndex + 1);
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
}


arr = [1, 3, 2, 10, 15, 11, 8];