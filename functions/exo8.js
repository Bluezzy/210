var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a); // We're passing an object as an argument. Even if a different variable holds it inside the function, 
// There's both holding the same object (here an array). Therefore, any operation can mutate the object.
console.log(a); // [1, 2, 10];