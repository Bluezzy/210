function isInAlphabet(character) {
  var asciiNumeric = character.toLowerCase().charCodeAt(); // 'A' to 'Z' are valid after being lowercased.
  return (asciiNumeric >= 97 && asciiNumeric <= 122); 
}

function isInlastHalfAlphabet(charCode) { // ('n' to 'z') or ('N' to 'Z')
  return ((charCode <= 122 && charCode >= 110) || (charCode <= 90 && charCode >= 78));
}

function goDownTheAlphabet(charCode) {
  return (charCode - 13);
}

function goUpTheAlphabet(charCode) {
  return (charCode + 13);
}

function cipher(charCode) {
  if (isInlastHalfAlphabet(charCode)) {
    charCode = goDownTheAlphabet(charCode);
  } else {
    charCode = goUpTheAlphabet(charCode);
  }
  return charCode;
}

function mutate(character) {
  var charCode = character.charCodeAt();
  var cipheredCharCode = cipher(charCode);
  var mutatedCharacter = String.fromCharCode(cipheredCharCode);
  return mutatedCharacter;
}

function rot13(string) {
  string = String(string);
  var i;
  var newStr = '';

  for (i = 0; i < string.length; i++) {
    if (isInAlphabet(string[i])) {
      newStr += mutate(string[i]);
    } else {
      newStr += string[i];
    }
  }

  return newStr;
}