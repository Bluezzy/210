function alphabetPosition(text) {
  var cleanedString = text.toLowerCase().replace(/[^a-z]/g, '');
  return cleanedString;
}

console.log(alphabetPosition('The sunset 1 arrives at seven o\' clock'))