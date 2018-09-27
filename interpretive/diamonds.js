function diamond(n) {
  var topLines = [];
  var middleLine = '*'.repeat(n);
  var nbOfStars = 1;
  var nbOfSpaces;
  var i;

  while (nbOfStars < n) {
    nbOfSpaces = (n - nbOfStars) / 2;
    topLines.push(lineRule(nbOfStars, nbOfSpaces));
    nbOfStars += 2;
  }

  var bottomLines = topLines.slice().reverse();
  var lines = topLines.concat(middleLine).concat(bottomLines);

  for (i = 0; i < lines.length; i++) {
    console.log(lines[i]);
  }
}

function lineRule(nbOfStars, nbOfSpaces) {
  return ' '.repeat(nbOfSpaces) + '*'.repeat(nbOfStars) + ' '.repeat(nbOfSpaces);
}