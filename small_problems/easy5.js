function repeater(string) {
  var result = "";
  var i;
  for (i = 0; i < string.length; i++) {
    result += string[i] + string[i];
  }
  return result;
}

function isConsonant(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  letter = letter.toLowerCase();
  return ( (letter.toLowerCase() >= 'a' && letter.toLowerCase() <= 'z') && 
           (!vowels.includes(letter)) );
}

function doubleConsonants(string) {
  var result = "";
  var i;
  for (i = 0; i < string.length; i++) {
    if (isConsonant(string[i])) {
      result += string[i] + string[i];
    } else {
      result += string[i];
    }
  }
  return result;
}

function reverseNumber(number) {
  return Number(String(number).split('').reverse().join(''));
}

function centerOf(string) {
  if (string.length % 2 === 1) {
    return string[Math.floor(string.length / 2)];
  } else {
    return string.substr(string.length / 2 - 1, 2);
  }
}

function negative(integer) {
  if (integer >= 0) {
    return integer * (-1);
  } else {
    return integer;
  }
}

function sequence(length, gap = 1) {
  if (length <= 0) { return []; }

  var result = [];
  var currentValue = gap;
  for (i = 0; i < length; i++, currentValue += gap) {
    result.push(currentValue);
  }
  return result;
}

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function reverseWords(string) {
  var i;
  var words = string.split(' ');
  var result = '';

  for (i = 0; i < words.length; i++) {
    if (words[i].length < 5) {
      result += words[i] + ' ';
    } else {
      result += reverseWord(words[i]) + ' '
    }
  }
  return result;
}













//