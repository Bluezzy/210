function isPrime(number) {
  var i;

  if (number <= 1) {
    return false;
  }

  for (i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}