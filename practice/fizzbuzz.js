function multipleOfThreeAndThive(n) {
	var output;
	if (n % 3 == 0 && n % 5 == 0) {
		output = "Fizzbuzz"
	} else if ( n % 3 == 0 ) {
		output = "Fizz";
	} else if ( n % 5 == 0 ) {
		output = "Buzz";
	}
	else {
		output = n;
	}
	return output;
}

function fizzbuzz(min, max) {
	for (i = min; i <= max; i++) {
		console.log(multipleOfThreeAndThive(i));
	}
}