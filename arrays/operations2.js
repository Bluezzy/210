function indexOf(array, value) {
	var i;
	for (i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
}

function lastIndexOf(array, value) {
	var i;
	for (i = array.length - 1; i >= 0; i--) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
}

function slice(array, start, end) {
	var i;
	var j;
	var newArr = [];
	for (i = start, j = 0; i < end; i++, j++) {
		newArr[j] = arr[i];
	}
	return newArr;
}

function splice(array, start, length) {
	var i;
	for (i = start; i < length; i++) {
		
	}
}