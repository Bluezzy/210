function initializeEmptyLines(nbOfLines, length) {
  var lines = [];
  var i;

  for (i = 1; i <= nbOfLines; i++) {
    lines.push(' '.repeat(length).split(''))
  }

  return lines;
}

function topOfStar(n) {
  var nbOfLines = Math.floor(n / 2);
  var topLines = initializeEmptyLines(nbOfLines, n);
  var leftStarPosition = 0;
  var rightStarPosition = n - 1;
  var middleStarPosition = Math.floor(n / 2)
  var i;
  var starPositions;

  for (lineNumber = 0; lineNumber < topLines.length; lineNumber++) {
    starPositions = [leftStarPosition, middleStarPosition, rightStarPosition];
    starPositions.forEach(function(position) {
      topLines[lineNumber][position] = '*'; 
    });
    leftStarPosition++;
    rightStarPosition--;
  }

  return topLines.map(function(line) {
    return line.join('');
  });
}

function bottomOfStar(n) {
  return topOfStar(n).slice().reverse();
}

function centerOfStar(n) {
  return ['*'.repeat(n)];
}

function star(n) {
  var starLines = topOfStar(n).concat(centerOfStar(n)).concat(bottomOfStar(n));
  starLines.forEach(function(line) {
    console.log(line);
  });
}

// TOP OF THE STAR

// Initialise an array of empty lines (with each line containing n number of ' ')
// How many lines ? Math.floor(n / 2)
// for each line, there are 3 stars. we need to determine :
//  - the left star position, : 0, 1, 2 ... nbOfLines - 1
//  - the right star position
// 
//  -  replace each element of the line, on those positions, with a star

// for each line,

//    starPositions = [leftStarPosition, middleStarPosition, rightStarPosition]
//    iterate over star positions. For each position :
//        - line[position] = '*'
