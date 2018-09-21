// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// Input : string with only alphabetical characters (a-z) 
// or a string that ignores non-alphabeical characters,

// output : a boolean value

// conditions when word is not block word:
//  - a block is used more than once

// we can treat the word as an array of letters, 
// hash of all alphabetical characters as keys, and their correspocing block letter as value.

// { 'a': 'n' .... 'n': 'a'}

// for each letter we iterate :
// check the letter as a key to access the value. if the value evaluates to true :
// hash(letter) = false;
// hash(value) = false;
// - if the value evaluates to false, return false
// if nothing is returned at the end of the iteration, return true.

function clean(word) {
  return word.replace(/[^a-z]/gi, '');
}

function isBlockWord(word) {
  var letters = clean(word).toLowerCase().split('');
  var blocks = {
    'a': 'n',
    'b': 'o',
    'c': 'p',
    'd': 'q',
    'e': 'r',
    'f': 's',
    'g': 't',
    'h': 'u',
    'i': 'v',
    'j': 'w',
    'k': 'x',
    'l': 'y',
    'm': 'z',
    'n': 'a',
    'o': 'b',
    'p': 'c',
    'q': 'd',
    'r': 'e',
    's': 'f',
    't': 'g',
    'u': 'h',
    'v': 'i',
    'w': 'j',
    'x': 'k',
    'y': 'l',
    'z': 'm',
  }
  var i;
  var letter;

  for (i = 0; i < letters.length; i++) {
    letter = letters[i];
    if (blocks[letter]) {
      blocks[blocks[letter]] = false;   
      blocks[letter] = false;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false