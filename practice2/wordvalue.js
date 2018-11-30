function high(str){
  var words = str.split(' ');
  var wordValues = words.map(function(word) {
    return wordValue(word);
  });
  var max = Math.max(...wordValues);
  return words.find(function(word) {
    return wordValue(word) === max;
  });
}

function getAlphabet() {
  var alphabetValues = {};
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var i;
  var currentLetter;
  
  for(i = 0; i < alphabet.length; i++) {
  currentLetter = alphabet[i];
  alphabetValues[currentLetter] = i + 1;
  }
  
  return alphabetValues;
}

function wordValue(word) {
  var alphabet = getAlphabet();
  var characters = word.split('');
  var value = characters.reduce(function(sum, character) {
    return sum + alphabet[character];
  }, 0);
  return value;
}

// object : word and their values

// input : array of word (split(' ') the string)

// GENERAL ALGORITHM
// 1. split the string into an array of words.
// 2. map the array, with each element turned into their 'word-value' (helper function, see algorithm below). Save the array's max value.
// 3. using find, find the first element in the words array that has its scores strictly equal to the max's value
//    found in step 2.
// 4. return that element.


// WORDVALUE ALGORITHM
// 1. create an object named alphabetValues.
// 2. using reduce, step through an alphabet array('abcd...'.split(''), and at each step :
//       - add property to alphabetValues : 
//       - use the current letter as a key, and the current index increased by one as a value
// 3. split the word into array of characters, assign it to characters.
// 4. use reduce on characters as a source array, use 0 as initial value and accumulator,  alphabetValue
//    of the current character as a currentValue. return each step of the way the result increased by that value.
// 5. return the final reduced value.