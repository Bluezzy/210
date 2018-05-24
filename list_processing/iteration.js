function myForEach(array, func) {
  var i;
  for (i = 0; i < array.length; i++) {
    func(array[i], i, array);
  }
}

var min = Infinity;
var getMin = function (value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 1], getMin);    // undefined
console.log(min);                        // 3

function myFilter(array, func) {
  var newArray = [];
  array.forEach(function(element) {
    if (func(element)) { newArray.push(element) }
  });
  return newArray;
}

function myMap(array, func) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(func(element));
  });
  return newArray;
}

function myReduce(array, func, initial) {
  var currentValue = initial == undefined ? array[0] : initial;
  array = initial == undefined ? array.slice(1) : array

  array.forEach(function(element) {
    currentValue = func(currentValue, element);
  });
  return currentValue;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

function myOwnEvery(array, func) {
  var nothingFalseYet = true;

  array.forEach(function(element) {
    if (!(func(element))) { nothingFalseYet = false }
  });
  return nothingFalseYet;
}