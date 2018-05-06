function lastInArray(arr) {
  return arr[arr.length - 1];
}

function rollCall(names) {
	var i;
	for (i = 0; i < names.length; i++) {
		console.log(names[i]);
	}
}

function reversed(values) {
	var result = [];
	var i;
	for (i = values.length - 1; i >= 0; i--) {
		result.push(values[i]);
	}
	return result;
}

function firstIndex(val, arr) {
  var position = -1;
  var i;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
      position = i;
      break;
    }
  }

  return position;
}

function arrayToString(array) {
	var i;
	var str = "";
	for (i = 0; i < array.length; i++) {
		str += String(array[i]);
	}
	return str;
}