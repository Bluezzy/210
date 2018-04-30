var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a); 
// step1. the value referenced by the global variable 'a' is passed on as an argument to the method's parameter, 'b'.
// step2. 'b' is assigned a new value, the value it holds incremented to 10.

console.log(a); // But it never modifies the value that 'a' holds. therefore, 7 is the output.