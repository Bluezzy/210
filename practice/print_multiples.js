function logMultiples(n) {
	var multiplier;
	var total;
	for (multiplier = 99; multiplier >= 0; multiplier -= 2, total = (multiplier * n)) {
		if (total <= 100) {
			console.log(total);
		}
	}
}