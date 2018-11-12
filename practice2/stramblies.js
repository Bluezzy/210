// we assume that all letters are lowercases
// one of them is not a string  OR one of them is empty string => false
// 

// Algorithm:
// 1. step through the characters of str2.
//      - if the current character is included in str1 :
//          - set str1 to str1.replace(current character)
//      - else
//           - return false
// 2. return true

function scramble(str1, str2) {
  var i;
  
  for (i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      str1 = str1.replace(str2[i], '');
    } else {
      return false;
    }
  }
  
  return true;
}

// Solution 2

function scramble2(str1, str2) {
  var str1lettersCount = getAlphabetCount(str1);
  var str2lettersCount = getAlphabetCount(str2);
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return alphabet.every(function(letter) {
    return (str1lettersCount[letter] >= str2lettersCount[letter]);
  });
}

function getAlphabetCount(string) {
  var characters = string.split('');
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var count = {};

  var i;
  for (i = 0; i < alphabet.length; i++) {
    if (characters.includes(alphabet[i])) {
      count[alphabet[i]] = characters.filter(function(letter) { return letter === alphabet[i]; }).length; 
    } else {
      count[alphabet[i]] = 0;
    }
  }

  return count;
}

// Solution 3

function lettersCount(str) {
  var characters = string.split('');
  var count = {};

  var i;
  for (i = 0; i < characters.length; i++) {
    if (count[characters[i]]) {
      count[characters[i]]++;
    } else {
      count[characters[i]] = 1;
    }
  }

  return count;
}

function scramble3(str1, str2) {
  var str1lettersCount = getAlphabetCount(str1);
  var str2lettersCount = getAlphabetCount(str2);

  var i;
  for (i = 0; i < str2.length; i++) {
    if (!str1lettersCount[str2[i]] || str1lettersCount[str2[i]] < str2lettersCount[str2[i]]) {
      return false;
    }
  }

  return true;
}



