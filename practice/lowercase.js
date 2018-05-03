function toLowerCase(string) {
  var i;
  var asciiNumeric;
  var newStr = '';
  for (i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
    }
    newStr += String.fromCharCode(asciiNumeric);
  }
  return newStr;
}