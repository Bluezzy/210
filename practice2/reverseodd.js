function reverse(str){
  str = str.trim();
  var words = str.split(/\s+/);
  var transformedWords = words.map(function(word, index) {
    if (index % 2 === 1) {
      return reversedCharacters(word);
    } else {
      return word;
    }
  });
  return transformedWords.join(' ');
}

// ALGORITHM
// 1. trim the string : 
// 2. split the string into words using space
// 3. map the words,  if its index is odd :
//     - return all the characters reversed * (helper function)
//                    else, return the element himself
// 4. return the string by joining the array with one single space.



function reversedCharacters(word) {
  var result = '';
  var i;
  var currentCharacter;
  for (i = word.length - 1; i >= 0; i--) {
    currentCharacter = word[i];
    result += currentCharacter;
  }
  return result;
}

// ALGORITHM
// assign an empty string to a var named result
// step through the word backwardly
//   - assign result to its string value and the current character concatenated.
// return result