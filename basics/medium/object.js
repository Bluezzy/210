/*

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
// myObject[a];  bug : the property's key 'a' is a string
myObject.a;

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName); // () is missing, the functions won't be executed.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]); // we push elements of the array that are primitive.
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase(); // temporarily, a string object is at use before returning a primitive string value.
  }
}

console.log(array2); // Therefore, array2's elements are not affected

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678'; // accessing variable declared on line 44. create the property '456' : '678'.

console.log(myObject[prop2]); // accessing variable declared on line 44
console.log(myObject.prop2);

var myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // array is an object : non positive integer and non-existing index gives undefined

myArray[-1] = 'd'; 
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd' but it is not considered as an element of the array
console.log(myArray['e']); // 5
console.log(myArray); // ["a", "b", "c", "f", "-1": "d", e: 5]

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5; // [5, 5, -1: 5, -2: 5]

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i]; 
  }

  return sum / array.length; //array.length is 2, because items that got added on negative indexes are not elements of the array.
}

average(myArray); // 10 is expected

*/

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

function penultimate(string) {
  words = string.split(' ');
  penultimateIndex = words.length - 2;
  return words[penultimateIndex];
}

function timeOfDay(fromMidnight) {
  var midnight = new Date(2018, 0, 0, 0);
  var MINUTES_IN_A_DAY = 1440
  while (fromMidnight <= 0) {
    fromMidnight += MINUTES_IN_A_DAY
  }
  var minutesFromMidnight = fromMidnight % MINUTES_IN_A_DAY
  var time = new Date(midnight.setMinutes(minutesFromMidnight))
  var hours = String(time.getHours());
  var minutes = String(time.getMinutes());
  return (formatTime(hours, minutes))
}

function formatTime(hours, minutes) {
  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  return(hours + ":" + minutes)
}

var MILLISECONDS_PER_MINUTE = 60000;
var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  var midnight = new Date(DATE_PART + ' 00:00');
  var currentDateTime = new Date(DATE_PART + ' ' + timeStr);

  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}








//