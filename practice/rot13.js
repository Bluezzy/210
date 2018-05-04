function isInAlphabet(character) {
  character = String(character);
  if (character.length != 1) {
    return false;
  }

  var asciiNumeric = character.toLowerCase().charCodeAt(); // 'A' to 'Z' are valid after being lowercased.
  return (asciiNumeric >= 97 && asciiNumeric <= 122); 
}

function isInlastHalfAlphabet(character) { // ('n' to 'z') or ('N' to 'Z')
  var asciiNumeric = character.toLowerCase().charCodeAt();
  return (asciiNumeric <= 122 && asciiNumeric >= 110);
}

function cipher(character) {
  var charCode = character.charCodeAt();
  var cipheredCharCode = charCode;
  var cipheredCharacter;

  if (isInAlphabet(character)) { 
    if (isInlastHalfAlphabet(character)) {
      cipheredCharCode -= 13; // we go down half of the alphabet
    } else { // all remaining characters
      cipheredCharCode += 13; // we go up half of the alphabet
    }
  }

  cipheredCharacter = String.fromCharCode(cipheredCharCode); // convert our modified number back to a caracter.
  return cipheredCharacter;
}

function rot13(string) {
  var i;
  var newStr = '';

  for (i = 0; i < string.length; i++) {
    newStr += cipher(string[i])
  }

  return newStr;
}