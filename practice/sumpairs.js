function sumpairs(ints, s) {
  var i;
  var j;
  var pair = [];
  
  for (i = 0; i < ints.length; i++) {
    for (j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) { return [ints[i], ints[j]]; }
    }
  }
}

var ints = [10, 5, 2, 3, 7, 5];
var sum = 10;