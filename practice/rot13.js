function isInAlphabet (character) {
  character = String(character);
  if (character.length != 1) {
    return false;
  }

  var asciiNumeric = character.toLowerCase().charCodeAt(); // 'A' to 'Z' are valid after being lowercased.
  return (asciiNumeric >= 97 && asciiNumeric <= 122); 
}

function cipher(character) {
  character = String(character);
  if (character.length != 1) {
    return false;
  }

  var charCode = character.charCodeAt();
  var cipheredCharCode = charCode;
  var cipheredCharacter;

  if (isInAlphabet(character)) { // 'a' to 'z' || 'A' to 'Z'
    if ( (charCode <= 122 && charCode >= 110) || (charCode <= 90 && charCode >= 78) ) { // ('n' to 'z') or ('N' to 'Z') (bottom half of the alphabet)
      cipheredCharCode -= 13; // we go down half of the alphabet
    } else { // remaining caracters of the alphabet: ('a' to 'm') or ('A' to 'M')
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