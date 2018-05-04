function pb1() {
  var i;
  for (i = 1; i <= 99; i += 2) { console.log(i); }
}

function pb2() {
  var i;
  for (i = 2; i <= 99; i += 2) { console.log(i)}
}

function pb3() {
  var SQUARE_FEET = 10.7639;
  var length = Number(prompt('Enter the length of the room in meters:'));
  var width = Number(prompt('Enter the width of the room in meters:'));
  var areaInMeters = length * width;
  var areaInFeet = areaInMeters * SQUARE_FEET;

  alert('The are of the room is ' + areaInMeters.toFixed(3) +
    ' square meters (' + areaInFeet.toFixed(2) + ' square feet).');
}

function pb4() {
  var bill = Number(prompt('What is the bill?'));
  var percentage = Number(prompt('What is the tip percentage?'));
  var tip = (bill * percentage) / 100;
  var total = (bill + tip);
  alert('The tip is $' + tip.toFixed(2) + '\nThe total is $' + total.toFixed(2));
}

function pb5() {
  function factorial(n) {
    if (n === 1) { return 1 } 
    return (factorial(n - 1) * n);
  }

  function sum(n) {
    if (n === 1) { return 1 }
    return (sum(n - 1) + n)
  }

  var number = parseInt(prompt('Please enter an integer greater than 0:'));
  var choice = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

  if (choice === 's') {
    alert ('The sum of the integers between 1 and ' + number + ' is ' + sum(number) + '.');
  } else if (choice ==='p') {
    alert ('The product of the integers between 1 and ' + number + ' is ' + factorial(number) + '.');
  } else {
    alert ('Hmm. Wrong input !');
  }
}

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}


function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function multisum(n) {
  var total = 0;
  var i;
  for (i = 1; i <= n; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      total += i;
    }
  }
return total;
}

function asciiValue(string) {
  var i;
  var sum = 0;

  for (i = 0; i < string.length; i++) {
    sum += string[i].charCodeAt();
  }
  return sum;
}

































