// input : string of combination of digits separated by 1 or more space 
// output : string

// requirements :
//"/t a103 123  2343 034  \t 2a2  99" => ['a103', '123', '2343', '034', '22', '99']
// => ['103', '123', '2343', '034', '22', '99'] => digits

// Algorithm 
// 1. split the string (/t and whitespaces with regex)
// 2. map the elements to get each element cleaned (function clean that get rid of non-digits characters)
//   and coerced to number
// 3. sort the digits by their weight value.
// 4. map the digits to string-digits and join then with 1 space.

function orderWeight(string) {
  return getNumbers(string).sort(compareWeight).map(String).join(' ');
}

function clean(str) {
  return str.replace(/[^0-9]/, '');
}

function getNumbers(string) {
  return string
    .split(/\s+/)
    .filter(function(str) { return str.length > 0; })
    .map(clean)
    .map(Number);
}

function weight(val) {
  var digits = String(val).split('').map(Number);
  return digits.reduce(function(sum, digit) {
    return sum + digit;
  }, 0);
}

function compareWeight(n1, n2) {
  if (weight(n1) - weight(n2) === 0) {
    return String(n2) - String(n1);
  } else { 
    return weight(n1) - weight(n2);
  }
}


str = "\t a103 123  2343 034  \t 2a2  99"