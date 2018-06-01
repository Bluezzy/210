function reverse(string) {
  var reversedCharacters = [];
  string.split('').forEach(function(char) {
    reversedCharacters.unshift(char);
  })
  return reversedCharacters.join('');
}