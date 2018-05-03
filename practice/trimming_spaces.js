function trimLeft(string) {
  var new_str = ''
  var i;
  var j;
  for (i = 0; i <= string.length - 1; i++) {
    if (string[i] != ' ') {
      for (j = i; j <= string.length - 1; j++) {
        new_str += string[j];
      }
      return new_str;
    } 
  }
  return '';
}

function trimRight(string) {
  var new_str = ''
  var i;
  var j;
  for (i = string.length - 1; i >= 0; i--) {
    if (string[i] != ' ') {
      for (j =  0; j <= i; j++) {
        new_str += string[j];
      }
      return new_str;
    }
  }
  return '';
}

function trim(string) {
  return trimRight(trimLeft(string));
}
