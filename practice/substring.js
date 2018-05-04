function substr(string, start, length) {
  var newString = '';
  var index;
  var i;

  if (start < 0) {
    start = string.length + start;
  }

  for (i = start, index = 1; i < string.length; i++, index++) {
    if (index <= length) {
      newString += string[i]
    }
  }
  return newString; 
}