var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction(); 
/* myVar inside the function is no declared, so it will look for an existing declared variable 
with the same name on an outer scope, and reassign it with the value 'This is local'.*/
console.log(myVar); // 'This is local'.