function generatePattern(n) {
  var string;
  var i;
  var j;
  var k;

  for (i = 1; i <= n; i += 1) {
    string = '';
    for (j = 1; j <= i; j += 1) {
      string += String(j);
    }

    for (k = i + 1; k <= n; k += 1) {
      string += '*';
    }

    console.log(string);
  }
}
