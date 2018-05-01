function multipleOfThreeAndThive(n) {
	var output;
	if ( n % 3 == 0 || n % 5 == 0 ) {
		output = String(n);
	}
	if (n % 3 == 0 && n % 5 == 0)	 {
		output += "!";
	}
	return output;
}

function multiplesOfThreeAndThive() {
	for (i = 1; i <= 100; i++) {
		var output = multipleOfThreeAndThive(i);
		if (typeof(output) !== 'undefined') {
			console.log(output);
		}
	}
}