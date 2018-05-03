function splitString(string, delimiter) {
  var i;
  var new_str;

  if (delimiter == null) {
    console.log('ERROR: no delimiter');
    return;
  } else if (delimiter == '') {
    for (i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
    return;
  }

  new_str = "";

  for (i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(new_str);
      new_str = "";
      continue;
    }
    new_str += string[i];
  }

  console.log(new_str);
}