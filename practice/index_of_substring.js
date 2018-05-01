function indexOf(firstString, secondString) {
	var start;
	var last;
	var length = secondString.length;
	var i;
	var checkedString;

	for (start = 0, last = (length - 1); last < firstString.length; start++, last++) {
		checkedString = '';
		for (i = start; i <= last; i++)  {
			checkedString += firstString[i];
		}
		if (checkedString === secondString) {
			return start;
		}
	}
	return -1;
}

function lastIndexOf(firstString, secondString) {
	var length = secondString.length;
	var start = firstString.length - length;
	var j = start;
	var i;
	var checkedString;

	do {
		checkedString = '';
		for (i = 0; i < length; i++, j++) {
			checkedString += firstString[j];
		}
		if (checkedString === secondString) { return start; }
		start--;
	} while (start >= 0)
	return -1;
}