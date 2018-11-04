// input: any number
// output: any number (a persistence tracker)

// requirements:

// each time you multiply all the digits, add 1 to a persistence tracker. stop when the result of multiplication
// is less than 10.

// Data Structure :
// turn every current product into an array of digits, in order to multiply them easily.

// Algorithm :
// 1. set a variable named currentProduct and set it to num.
// 2. set a variable named tracker and set it to 0.
// 3. declare a variable named digits.
// 4. while currentProduct is superior to 9 :
//   - digits = String(currentProduct).split('').map(Number)
//   - currentProduct = reduce digits to the product of all its elements.
//   - increase tracker by 1.
// 5. return tracker

function persistence(num) {
  var currentProduct = num;
  var tracker = 0;
  var digits;
  
  while (currentProduct > 9) {
    digits = String(currentProduct).split('').map(Number);
    currentProduct = digits.reduce(function(val1, val2) {
      return val1 * val2;
    });
    tracker++;
  }
  
  return tracker;
}
