function dms(number) {
  var MINUTES_PER_DEGREE = 60;
  var SECONDS_PER_MINUTE = 60;
  var totalSeconds = number * MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;
  var degrees = Math.floor(totalSeconds / MINUTES_PER_DEGREE / SECONDS_PER_MINUTE);
  var remainingSeconds = totalSeconds - (degrees * MINUTES_PER_DEGREE * SECONDS_PER_MINUTE);
  var minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  remainingSeconds -= (minutes * SECONDS_PER_MINUTE);
  return String(degrees) + '\xb0' + String(minutes) + '\'' + String(remainingSeconds) + '"';
}

function copyNonDupsTo(resultArray, array) {
  array.forEach(function (value) {
                  if (resultArray.indexOf(value) === -1) {
                    resultArray.push(value);
                  }
                });
}

function union(array1, array2) {
  var newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

function halvsies(array) {
  var half = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, half);
  var secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}

function findDup(array) {
  var i;
  var j;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if ( (j !== i) && (array[i] === array[j]) ) { 
        return array[j];
      }
    }
  }
}

function interleave(arr1, arr2) {
  var i;
  result = [];
  for (i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

function showMultiplicativeAverage(numbers) {
  var product = 1;
  var i;
  numbers.forEach(function(num) {
    product *= num;
  });
  return (product / numbers.length).toFixed(3);
}

function multiplyList(arr1, arr2) {
  var products = [];
  var i;
  for (i = 0; i < arr1.length; i++) {
    products.push(arr1[i] * arr2[i])
  }
  return products;
}

function digitList(number) {
  return String(number).split('').map(x => Number(x));
}

function countOccurrences(array) {
  var i;
  var occurrences = {};
  for (i = 0; i < array.length; i++) {
    if (occurrences[array[i]]) {
      occurrences[array[i]] += 1;
    } else {
      occurrences[array[i]] = 1;
    }
  }
  return occurrences;
}

function average(numbers) {
  var total = 0;
  var i;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return Math.floor(total / numbers.length)
}
