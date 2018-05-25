function totalArea(rectangles) {
  var areas = rectangles.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });
  var total = areas.reduce(function(sum, area) {
    return sum + area;
  });
  return total;
}

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  });
  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

function hasIdAndTitle(movie) {
  var keys = Object.keys(movie);
  return ((keys.indexOf('id') !== -1) && (keys.indexOf('title') !== -1));
}

function validMovies(movies) {
  return movies.filter(function(movie) {
    return hasIdAndTitle(movie);
  });
}

function processReleaseData(movies) {
  return validMovies(movies).map(function(movie) {
    var release = {};
    release.id = movie.id;
    release.title = movie.title;
    return release;
  });
}

function octalToDecimal(numberString) {
  var digits = numberString.split('').reverse().map(function(digit) {
    return Number(digit);
  });
  var poweredEightDigits = digits.map(function(digit, index) {
    return digit * Math.pow(8, index)
  });
  return poweredEightDigits.reduce(function(total, number) {
    return total + number;
  });
}

function anagram(word, list) {
  return list.filter(function (candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = source.split('').sort();
  var targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every(function (letter, index) {
    return letter === array2[index];
  });
}

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  var result = [];
  data.forEach(function(band) {
    var processedBand = {};
    processedBand.name = format(band.name);
    processedBand.country = "Canada";
    processedBand.active = band.active;
    result.push(processedBand);
  });
  return result;
}

function format(string) {
  var words = string.split(' ');
  return words.map(function(word) {
    return cleanUp(word);
  }).join(' ');
}

function cleanUp(word) {
  word = removeDots(word);
  word = capitalize(word);
  return word;
}

function removeDots(word) {
  var characters = word.split('');
  var selectedCharacters = [];
  characters.forEach(function(char) {
    if (char !== ".") { selectedCharacters.push(char) }
  });
  return selectedCharacters.join('');
}

function capitalize(word) {
  var characters = word.split('');
  characters[0] = characters[0].toUpperCase();
  return characters.join('');
}








