function radiansToDegrees(radians) {
  return radians / (Math.PI / 180);
}

var degrees = -180;
console.log(Math.abs(degrees));

console.log(Math.sqrt(16777216)); 

console.log(Math.pow(16, 6)); 

var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function randomInteger(value1, value2) {
	var min = Math.min(Math.floor(value1), Math.floor(value2));
	var max = Math.max(Math.floor(value1), Math.floor(value2));
	var difference = max - min + 1;

	return (Math.floor(Math.random() * difference) + min);
}