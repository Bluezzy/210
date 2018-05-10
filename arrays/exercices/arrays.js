var array1 = [1, 2, 3, 4];
var array1Copy = [];
var i;

for (i = 0; i < array1.length; i++) {
  array1Copy[i] = array1[i];
}

var array2 = [1, 2, 3, 4];
var array2Copy = array2.slice();

function concat() {
  var newArray = [];
  var currentArg;
  var i;
  var j;

  for (i = 0; i < arguments.length; i += 1) {
    currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (j = 0; j < currentArg.length; j += 1) {
        newArray[newArray.length] = currentArg[j];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
  }

  return newArray;
}

function push(array) {
  var i;
  var indexToPush = array.length
  var length = arguments.length;
  for (i = 1; i < arguments.length; i++, indexToPush++) {
    array[indexToPush] = arguments[i];
  }
  return array;
}

function pop(array) {
  if (array.length == 0) {
    return undefined;
  }
  poppedElement = array.slice(-1);
  array.length -= 1;
  return poppedElement;
}

function reverse(inputForReversal) {
  var j;
  var i;
  var result = [];

  for (j = inputForReversal.length - 1, i = 0; j >= 0; j--, i++) {
    result[i] = inputForReversal[j];
  }

  return ( (typeof(inputForReversal) == 'string') ? result.join('') : result );
}

function shift(array) {
  if (array.length === 0) { return [] };

  array.reverse();
  removedElement = array[array.length - 1];
  array.length--;
  array.reverse();
  return removedElement;
}

function unshift(array) {
  var i;
  var j;

  for (i = arguments.length - 1; i > 0; i--) {
    array.reverse().push(arguments[i]);
    array.reverse();
  }
  return array.length;
}

// Splice using remove and insert methods.

function splice(array, start, deleteCount) {
  var i;
  if (start > array.length) { start = array.length; }
  if (deleteCount > (array.length - start)) { deleteCount = array.length - start; }
  if (start < 0 || deleteCount < 0) { return 'wrong input'; }

  remove(array, start, deleteCount);

  for (i = arguments.length - 1; i >= 3; i--) {
    insert(array, start, arguments[i]);
  }

  return array;
}

function insert(array, index, value) {
  var secondHalf = array.slice(index);
  var i;
  for (i = 1; i <= secondHalf.length; i++) {
    array.pop();
  }
  array.push(value);
  for (i = 0; i < secondHalf.length; i++) {
    array.push(secondHalf[i]);
  }
  return array;
}

function remove(array, index, count) {
  var secondHalf = array.slice(index);
  var i;

  for (i = 1; i <= secondHalf.length; i++) {
    array.pop();
  }
  for (i = 1; i <= count; i++) {
    secondHalf.shift();
  }
  for (i = 0; i < secondHalf.length; i++) {
    array.push(secondHalf[i]);
  }
  return array;
}

function slice(array, begin, end) {
  var result = [];
  var i;

  if (begin > array.length) { begin = array.length; }
  if (end > array.length) { end = array.length; }

  for (i = begin; i < end; i++) { result.push(array[i]); }
    
  return result;
}








//