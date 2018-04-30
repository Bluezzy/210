var myVar = 'This is global';

function someFunction() {
  console.log(myVar); // no variable with this name defined on this scope, so javascript
  // will access the variable with the same name declared on the global scope.

someFunction(); // 'This is global'.