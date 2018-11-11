// -------------- HELPER METHODS //

function allDuplicates(array, value) {
	return array.filter(function(currentValue) {
		return value === currentValue;
	});
}

// Solution 1 : Work with unique elements, seems to work best.

//1. filter the original array into a unique array :
//    - if the index of the element is not equal to  the first index where whe element appears, reject it.  
//2. map the unique array turning each element into the original array, filtered with only the 
//   original array's elements that are equal to the current unique-array element.

function repeatedElems(array) {
	var uniqueArray = array.filter(function(element, index) {
		return (index === array.indexOf(element));
	});

	return uniqueArray.map(function(element) {
		return array.filter(function(el) {
			return element === el;
		})
	});
}

// Solution 2 using helper method to get all duplicated and reduce

function duplicatedElements(arr) {
	var seen = [];
	return arr.reduce(function(resultArray, currentElement) {
		if (!seen.includes(currentElement)) {
			seen.push(currentElement);
			resultArray.push(allDuplicates(arr, currentElement));
		}
		return resultArray;
	}, []);
}

// Solution 3 using helper method to get all duplicates, no reduce.

function duplicatedEls(arr) {
  var seen = [];
  var result = [];
  var i;

  for (i = 0; i < arr.length; i++) {
    if (!seen.includes(arr[i])) {
    	seen.push(arr[i]);
    	result.push(allDuplicates(arr, arr[i]));
    }	
  }
  return result;	
}

// Wrong Solution 4 : Brute force attempt : sorting issue, only work with adjacent elemeents.

// 1. sort the array
// 2. reduce the original array with empty array as initial value. keep track of current element and current index.
// 3. if the element does not appear before a sorted, array, means that it's the first time we see the element :
//      - in that case, push a subarray containing the element.
// 4. else if the element does not appear for the first time, the previous element will be the same in a sorted array :
//       - concat the last subarray of the resulting array in order to group repeated elements in the same subarray.
// 5. return the resulting array.


function repeatedElements(arr) {
	var arr = arr.slice().sort(); // won't sort 1 and '1'

	return arr.reduce(function(resultArray, element, i) {
	  if (arr[i] !== arr[i - 1]) {
	      resultArray.push([element]);
	  } else {
	      resultArray[resultArray.length - 1] = resultArray[resultArray.length - 1].concat(element);
	  }
	  return resultArray;
	}, []);
}

// Wrong Solution 5 : using an eleement count object :
//               - issue that 1 and '1' are different elemeents, but it will be, at best,
//           hard to manipulate them when they become keys, and at worst, will become the same key.
//               - too many changes of data structure make it hard to implement (array to object back to array of subarrays).
//           however, there is a direct way to make the object values the result we're looking for.

// 1. create a empty elementCount object.
// 2. step through the array. for each element :
//      - if the object doesn't have the element as a key, bind element as a key, and bind the key to the following value;
//          - the original array filtered, with only the elemenets that are strictly equal to the current element.
// 3. return the object values in an array, with each value being a subarray.
// 

function repeatedEls(arr) {
	var count = {};
	var i;
	var keys;

	for (i = 0; i < arr.length; i++) {
		keys = Object.keys(count);
		if (keys.indexOf(arr[i]) === -1) {
			count.arr[i] = arr.filter(function(element) { 
				return arr[i] === element;
			});
		}
	}

	return Object.values(count);
}



arr = [2, 1, 2, "1", 3, "hello", 2, "hi", 1, "hi"]















