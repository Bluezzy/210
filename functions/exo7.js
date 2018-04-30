var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a); // despite having the same name, the global variabe 'a' pass its value to a different variable with the same name, the function's parameter.
// it has no effect on the global variable, even if it has the same name, because of variable shadowing.
console.log(a); // '7' is still the output.