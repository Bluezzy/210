function digitalRoot(n) {
  var reducedSum = n;
  var digits;
  
  while (reducedSum >= 10) {
    digits = String(reducedSum).split('').map(Number);
    reducedSum = digits.reduce(function(sum, value) {
      return sum + value;
    }, 0);
  }
  
  return reducedSum;
}

