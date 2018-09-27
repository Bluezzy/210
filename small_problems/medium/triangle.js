// input : the length of each side of a triangle that respect those rules :
//  the biggest number is smaller than the sum of the 2 smallest numbers.
// 
// OUTPUT : a string describing the type of triangle based on some rules

// rules :
// equilateral : all numbers are equal
// isosceles : if 2 numbers are equal but not equilateral.
// scalene :  if it's not equilateral and if there aren't 2 numbers that are equal, then all three sides are of different lengths.

// Algorithm :
// 1. Check if the triangle is valid by analyzing the 3 numbers as input.
//   - they are all numbers
//   - they are greater than 0.
//   - find the max value out of the 3 numbers :
//       - create an array containing all 3 numbers
//       - sort the array based on a comparison criteria, in a way that put the max as the first element.
//       - compare the first element to the sum of the last two elements :  make sure the first element is strictly superior.
//  Wrap all those conditions in a functions that returns false if one of the condition is missed, true as default.
//
// 2. Inside the main function :
//     - return 'invalid' if the previous function, with the 3 input numbers as arguments, returns false.
//     - check if it's equilateral :
//           . if a == b && b === c && c === a, returns 'equilateral'
//     - if it's not equilateral, meeans at least 1 number is different. to check if it's iscicele, only 1 
//        of the 3 conditions above need to be true :
//               a === b || b === c || c === a. returns 'iscocele'
//     - if it's not iscocele, means all numbers are different. 'scalene' is returned by default, because every other possibility
//       was already checked.
//

function isValidTriangle(side1, side2, side3) {
  return (isValidInput([side1, side2, side3]) && isValidMax([side1, side2, side3]));
}

function triangleType(side1, side2, side3) {
  if (!isValidTriangle(side1, side2, side3)) {
    return 'invalid';
  }

  if (isEquilateral(side1, side2, side3)) {
    return 'equilateral';
  } else if (isIsosceles(side1, side2, side3)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function isEquilateral(side1, side2, side3) {
  return (side1 === side2) && (side2 === side3) && (side3 === side1);
}

function isIsosceles(side1, side2, side3) {
  return (side1 === side2) || (side2 === side3) || (side3 === side1);
}

function isValidInput(numbers) {
  var isValid = true;
  numbers.forEach(function(number) {
    if ((typeof(number) !== 'number') || (number <= 0)) {
      isValid = false;
    }
  });
  return isValid;
}

function isValidMax(numbers) {
  var orderedNumbers = numbers.sort(function(n1, n2) {
    return n2 - n1;
  });
  var max = orderedNumbers[0];
  var sumWithoutMax = orderedNumbers.slice(1).reduce(function(a, b) {
    return a + b;
  });

  return sumWithoutMax > max;
}