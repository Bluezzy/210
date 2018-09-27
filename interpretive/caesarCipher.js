var UPPERALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var LOWERALPHABET = UPPERALPHABET.join('').toLowerCase().split('');

function letterCeasarEncrypt(character, increment) {
  if (!isALetter(character)) { return character; }

  var currentAlphabetPosition = getAlphabetPosition(character);
  var newAlphabetPosition = (currentAlphabetPosition + increment) % 26;

  if (/[A-Z]/.test(character)) {
    return UPPERALPHABET[newAlphabetPosition];
  } else {
    return LOWERALPHABET[newAlphabetPosition];
  }
}

function isALetter(character) {
  return (/[A-Za-z]/.test(character));
}

function getAlphabetPosition(character) {
  return LOWERALPHABET.indexOf(character.toLowerCase());
}

function ceasarEncrypt(string, increment = 0) {
  if (string.length <= 0 || typeof(string) !== 'string') {
    return '';
  }

  return string.split('').map(function(element) {
    return letterCeasarEncrypt(element, increment);
  }).join('');
}