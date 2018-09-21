// adjectives : ****
// nouns : ****
// verbs : ****
// adverbs : ****

// input : an object that contain code-pattern sring-sentence, and an object with 4 properties : adjectives, 
// nouns, verbs, adverbs: values are array of specific words.
// output : a decrypted string-sentence

// we have an array of adjective, an array of nouns, array of verbs and array of adverbs
// of different lengths.

// we want to replace the code-patterns in the sentence with their corresponding 

// algorithm :
// - while isStillCryped,
// - replacePattern


function randomNumber(start, end) {
  return Math.floor(Math.random() * end) + 1;
}

function randomWord(array) {
  if (array.length === 0) { return 'empty array'}

  var index = randomNumber(0, array.length) - 1;
  return array[index];
}

function remove(array, value) {
  array.splice(array.indexOf(value), 1);
  return array;
}

function needAdjective(pattern) {
  return pattern === '*'.repeat(3);
}

function needNoun(pattern) {
  return pattern === '*'.repeat(5);
}

function needVerb(pattern) {
  return pattern === '*'.repeat(7);
}

function needAdverb(pattern) {
  return pattern === '*'.repeat(9);
}

function replacePattern(text, pattern, words) {
  if (needAdverb(pattern)) {
    return text.replace(pattern, pickAndRemove(words.adverbs));
  } else if (needVerb(pattern)) {
    return text.replace(pattern, pickAndRemove(words.verbs));
  } else if (needNoun(pattern)) {
    return text.replace(pattern, pickAndRemove(words.nouns));
  } else if (needAdjective(pattern)) {
    return text.replace(pattern, pickAndRemove(words.adjectives));
  }
}

function pickAndRemove(array) {
  var word = randomWord(array);
  remove(array, word);
  return word;
}

function isStillCrypted(text, patternRegex) {
  return patternRegex.test(text);
}

function madlibs(template) {
  var patternRegex = /((\*{3})|(\*{5})|(\*{7})|(\*{9}))(?!\*)/;
  var pattern;
  var text = template.textPattern;
  var words = {
    adjectives: template.words.adjectives.slice(),
    nouns: template.words.nouns.slice(),
    verbs: template.words.verbs.slice(),
    adverbs: template.words.adverbs.slice(),
  }
  while (isStillCrypted(text, patternRegex)) {
    pattern = text.match(patternRegex)[0];
    text = replacePattern(text, pattern, words);
  }

  return text;
}

var adjective = '***';
var noun = '*'.repeat(5);
var verb = '*'.repeat(7);
var adverb = '*'.repeat(9);

var template = {
  textPattern: 'The ' + adjective + ' ' + noun + ' ' + adverb + ' ' + verb + ' and ' + adverb + ' ' + verb +
                ' the ' + adjective + ' ' + noun + ' and the ' + adjective + ' ' + noun + '.',
  words: {
    adjectives: ['creepy', 'noisy', 'sleepy', 'lazy', 'lovely', 'strange', 'black', 'pink'],
    nouns: ['dog', 'dolphin', 'superhero', 'cricket', 'panda', 'robot'],
    verbs: ['jump on', 'lick', 'bite', 'kicks', 'kill', 'hide', 'tease', 'hug', 'kiss'],
    adverbs: ['easily', 'softly', 'roughly', 'fiercely', 'randomly', 'noisily', 'unexpectedly', 'passionately', 'quickly', 'wildly'],
  },
}

alert('Time to have some fun !');

do {
  alert(madlibs(template));
} while (true);





