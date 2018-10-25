function zigzagPattern(limit, length) {
  if (limit <= 1) { return '0'.repeat(length).split('').map(Number); }
  var x = 0;
  var y = 0;
  var indexes = [];

  while (y < length) {
    if (x <= 0) {
      for (x = 0; x < limit - 1; x++, y++) {
        indexes.push(x);
      }
    } else if (x >= limit - 1) {
      for (x = limit - 1; x > 0; x--, y++) {
        indexes.push(x);
      }
    }
  }
  indexes.length = length;

  return indexes;
}

function straightPattern(length) {
  var indexes = [];
  var i;

  for (i = 0; i < length; i++) {
    indexes.push(i);
  }

  return indexes;
}

function cleanString(string) {
  return string.replace(/[^a-zA-Z]/gi, '').toUpperCase();
}

function initializeRails(n, length) {
  var rails = [];
  var i;
  var x;
  var mark = '.';

  for (i = 0; i < n; i++) {
    rails.push([]);
    for (x = 0; x < length; x++) {
      rails[i].push(mark);
    }
  }

  return rails;
}

function fillRails(rails, string) {
  var limit = rails.length;
  var xCoordinates = zigzagPattern(limit, string.length);
  var yCoordinates = straightPattern(string.length);
  var i;

  for (i = 0; i < string.length; i++) {
    rails[xCoordinates[i]][yCoordinates[i]] = string[i];
  }

  return rails;
}

function encoding(string, nbOfRails) {
  var text = cleanString(string);
  var rails = initializeRails(nbOfRails, text.length);
  var fullRails = fillRails(rails, text);
  return [fullRails, fullRails.flat().join('').replace(/\./gi, '')];
}

var string = 'he°^ llo EvEry On°e*';