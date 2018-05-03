function repeat(string, times) {
  var i;
  var new_str = '';

  if ((typeof(times) != 'number') || (times < 0)) {
    return
  }

  for (i = 1; i <= times; i++) {
    new_str += string;
  }

  return new_str;
}