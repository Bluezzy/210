function push(array, value) {
	array[array.length] = value;
	return array.length;
}

function pop(array) {
	if (array.length == 0) {
		return 0;
	}
	return array.length -= 1;
}

function unshift(array, value) {
	var i;
	for (i = array.length; i > 0; i--) {
		array[i] = array[i - 1];	
	}
	array[0] = value;
	return array.length;
}

function shift(array) {
	if (array.length == 0) {
		return 0;
	}

	var i;
	var shiftedValue = array[0];
	for (i = 0; i < array.length - 1; i++) {
		array[i] = array[i + 1];
	}
	array.length--;
	return shiftedValue;
}

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

function splice(array, index, length) {
	var i;
	var shiftedValues = [];
	for (i = 0; i < index; i++) {
		push(shiftedValues, shift(array));
	}
	array.length = length;
	return shiftedValues;
}

function concat(arr1, arr2) {
	var i;
	var newArr = [];
	for (i = 0; i < arr1.length; i++) {
		push(newArr, arr1[i]);
	}
	for (i = 0; i < arr2.length; i++) {
		push(newArr, arr2[i]);
	}
	return newArr;
}

function join(array, joiningString) {
	result = String(array[0]);
	var i;
	for (i = 1; i < array.length; i++) {
		result += joiningString;
		result += String(array[i]);
	}
	return result;
}








//