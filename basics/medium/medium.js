(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // (false || undefined) => undefined
((false || undefined) || (false && undefined)); // (undefined || false) => false
((false && undefined) && (false || undefined)); // (false && false) => false
((false || undefined) && (false && undefined)); // (undefined && false) => undefined
((false && undefined) || 'a' || ''); // 'a'
('a' && (false || undefined) && ''); // undefined
((false || undefined) && 'a' && ''); // undefined

/*

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {  
    i += 1;
  }
}

the else statement is never executed, because i % 3 === 0 is true when i has 0 as a value. statement after if
gets executed, and since it's nested in a loop, i never gets incremented, it becomes infinite.

*/

var row;
var i;
var j;

function padLeft(number) {
  var stringNumber = String(number);
  return stringNumber.length <= 1 ? ' ' + stringNumber : stringNumber;
}

for (i = 1; i <= 10; i += 1) {
  row = '';
  for (j = 1; j <= 10; j += 1) {
    row += padLeft(i * j) + ' ';
  }

  console.log(row + '\n');
}

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0; i < numbers.length; i += 1) {
    for (var j = 0; j < cols.length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// counter : code snippets : 15, NaN, 15
// the code snippet 2 puts assignments after the log. at this point and after hoisting, function declaration takes precedece
// over variable declaration. the function body comes with it as well. using String(function() {} * "undefined") gives NaN.
// because '*' operator tries to coerce two operands that are NOT numbers.

function debugIt() {
  var status = 'debugging'; // step3. variable status declaration. step4. assignment of 'debugging' to to the var
  function logger() {          // step2. function logger() declaration.
    console.log(status);// step6 and final step. it logs the value hold by the variable status, declared in an outer scope.
  }

  logger(); // step5. calling to a nested function. in this inner scope, var status will be accessible with value "debugging"
}

debugIt(); // Step1. call to the debugIt() function.

function invoiceTotal() {
	var i;
	var total = 0;
	for (i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum = 0;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}

var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // 
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', empty * 1]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', empty * 2]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', empty, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3



function one() {
  function log(result) {
    console.log(result); // step6. logs "to". step8. logs "the". step 10. logs "Matrix!"
  }

  function anotherOne() {
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]); 
    } // result = "to" after step 4, "the" after step 7, "Matrix!" after step 9.

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // step 3 : logs "Welcome"
    anotherOne(116, 111); // step 4
  }

  anotherAnotherOne(); // step 2. 
  anotherOne(116, 104, 101); // step 7.
  return anotherOne; // step 9. the values passed in at step1 get passed as arguments to the "anotherOne' function.
}

one()(77, 97, 116, 114, 105, 120, 33); // step 1.
// Welcome
// to
// the
// Matrix!







//