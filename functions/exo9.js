console.log(a);

var a = 1;

// After hoisting, the code looks like this :

// var a;
// console.log(a);
// a = 1.

// variable declaration comes on top, and assignment remanes after the log. therefore, at the moment we try to log 'a', it is declared but 
// hasn't been assigned any value. In this case, JavaScript generates the value 'undefined'.