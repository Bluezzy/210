function noVowels(string) {
	return string.replace(/[aeiou]/gi, '')
}

function removeVowels(array) {
	return array.map(function(str) {
		return noVowels(str);
	});
}

function letterCaseCount(str) {
	var letters = str.split('');
	var counter = {
		lowercase: 0,
		uppercase: 0,
		neither: 0,
	}

	letters.forEach(function(letter) {
		if (/[a-z]/.test(letter)) {
			counter.lowercase += 1;
		} else if (/[A-Z]/.test(letter)) {
			counter.uppercase += 1;
		} else {
			counter.neither += 1;
		}
	});

	return counter;
}

function wordCap(string) {
	var words = string.split(' ');
	return words.map(function(word) {
		return word.substr(0, 1).toUpperCase() + word.substr(1);
	}).join(' ');
}

function swapCase(string) {
	return string.split('').map(function(character) {
		if (/[a-z]/.test(character)) {
			return character.toUpperCase();
		} else if (/[A-Z]/.test(character)) {
			return character.toLowerCase();
		} else {
			return character;
		}
	}).join('');
}

function staggeredCase(string) {
	var toBeUppered=  true;
	return string.split('').map(function(character) {
		if (/[a-z]/i.test(character)) {
			if (toBeUppered) {
				toBeUppered = false;
				return character.toUpperCase();
			} else {
				toBeUppered = true;
				return character.toLowerCase();
			}
		} else {
			return character;
		}
	}).join('');
}

function wordLengths(string) {
	return string.split(' ').map(function(word) {
		return word + ' ' + String(word.length);
	});
}

function searchWord(text, checker) {
	return text.split(' ').reduce(function(count, word) {
		if (checker === word) {
			count++;
		}
		return count;
	}, 0);
}

function highlightWordInText(checker, text) {
	return text.split(' ').map(function(word) {
		if (word === checker) {
			return '**' + word.toUpperCase() + '**';
		} else {
			return word;
		}
	}).join(' ');
}





