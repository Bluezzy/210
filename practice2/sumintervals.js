function sumIntervals(intervals){
  return unique(intervals.map(getAllNumbers).flat()).length;
}

function getAllNumbers(interval) {
  var i;
  var numbers = [];
  for (i = interval[0]; i <= interval[1]; i++) {
    numbers.push(i);
  }
  return numbers;
}

function unique(arr) {
  return arr.filter(function(el, i) {
    return arr.indexOf(el) === i;
  });
}

var intervals = [[1,4], [7, 10], [3, 5]];