function logOddNumbers(n) {
	var i;
	for (i = 1; i <= n; i++) {
		if (i % 2 === 1) {
			console.log(i);
		}
	}
}

logOddNumbers(19);
