function someFunction() {
  myVar = 'This is global'; // since it is not declared inside the function or
  // in an outer scope, 'mywvar' will become globally available.
}

someFunction();
console.log(myVar); // 'This is global'