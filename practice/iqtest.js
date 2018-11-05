function iqTest(numbers){
  var digits = numbers.split(' ').map(Number);
  if (digits.filter(function(digit) { return digit % 2 === 0; }).length >= 2) {
    return digits.findIndex(function(digit) { return digit % 2 === 1; }) + 1;
  } else {
  return digits.findIndex(function(digit) { return digit % 2 === 0; }) + 1;
  }
}


// input : string of at least 3 digits separated by space
// output : index of the correct digit.

// Data Structure :
// array of number-type of digits

// Algorithm :
// 1.split(' ') and map to get array of digit numbers, store it in a variable named digits.
// 2. if there are more than (or equal to) 2 even numbers (length of a filtered array of even numbers), then find the index where the element is odd.
// 3. else if there are more than (or equal to) 2 odd numbers, find the index where the element is even.
// 4. return that index
