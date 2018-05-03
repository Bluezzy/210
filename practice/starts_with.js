function startsWith(string, searchString) {
  var i;
  for (i = 0; i < searchString.length; i++) {
    if (searchString[i] !== string[i]) {
      return false;
    }
  }
  return true;
}

// iterate over the main string characters
// compare characters of main string and searchString based on their index.
//   if there is a difference, we return false.
// after end of iteration, we return true.