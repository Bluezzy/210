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

function checkGoldbach(n) {
  var num1 = 1;
  var num2;

  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  do {
    num1 += 1;
    num2 = n - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }

  } while (num1 !== num2);
}