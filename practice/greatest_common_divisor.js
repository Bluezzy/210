function gcd(num1, num2) {
	var i;
	if (num1 <= 0 || num2 <= 0) {return 'wrong values. only positive integers.'};

	for (i = num1; i >= 1; i--) {
		if ((num1 % i == 0) && (num2 % i == 0)) {
			return i;
		}
	}
	return 1;
}