function duplicateEncode(word){
  var letters = word.split('');
  var result = '';
  var count;
  
  for (i = 0; i < letters.length; i++) {
    count = letters.filter(function(letter) {
      return letter.toLowerCase() === letters[i].toLowerCase();
    }).length;
    if (count > 1) {
      result += ')';
    } else {
      result += '(';
    }
  }
  
  return result;
}

// 1. create a variable named letters, set it to an array of all the letters of the word.
// 2. create a variable named result, set it to an empty string.
// 3. declare a variable named count.
// 3. step through each letter of the word. at each step :
//     - set count back to the value 0.
//     - count the number of occurences of the current element by :
//         filtering the array of letters to only the same elements, get the length.
//         assign count to the length of the filtered array.
//     - if count > 1, add ')' to result.
//     - else, add '('.
// 4. return result
