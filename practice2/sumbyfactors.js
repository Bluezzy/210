function isPrime(n) {
  if (n <= 1) { return false; }
  var i;
  
  for (i = 2; i < n; i++) {
    if (n % i === 0) { return false; }
  }
  
  return true;
}

function primes(n) {
  var i;
  var primes =  [];
  for (i = 2; i < n; i++) {
    if (isPrime(i) && n % i === 0) { primes.push(i); }
  }
  return primes;
}

function getAllPrimes(numbers) {
  return unique(flatten(numbers.map(primes))).sort();
}

function isPrimeFactor(p, n) {
  return n % p === 0;
}

function unique(arr) {
  return arr.filter(function(val, i) {
    return i === arr.indexOf(val);
  });
}

function flatten(arr) {
  return arr.reduce(function(arr, subarr) {
    return arr.concat(subarr);
  }, []);
}

function intervalPrimeSum(primeFactor, interval) {
  var allPrimes = getAllPrimes(interval);  // [2, 3, 5]
  return interval.reduce(function(sum, n) {
    if (primes(n).includes(primeFactor)) { sum += n;}
    return sum;
  }, 0);
}

function sumOfDivided(interval) {
  var primeFactors = getAllPrimes(interval);

  return primeFactors.map(function(p) {
    return [p, intervalPrimeSum(p, interval)];
  });
}