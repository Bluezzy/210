var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction(); // a local variable is declared and assigned the value "This is local'.
console.log(myVar); // we are on the global scope, trying to log the value referenced by the global declared variable.
//'This is global' is the output.