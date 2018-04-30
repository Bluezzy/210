var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local'; // declaring a local variable only available to the function's scope.
  console.log(myVar); // then we output the value referenced by this local variable,
  // and not the global variable with the same name. The local variable is prioritized because of variable shadowing.
}

someFunction(); // so the output is "This is local'"