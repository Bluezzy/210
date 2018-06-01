function acronym(text) {
  var words = text.split(/\W+/).map(function(word) {
    return capitalize(word)[0];
  }).reduce(function(letter1, letter2) {
    return letter1 + letter2
  });
  return words;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1);
}