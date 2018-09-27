function isFriday(date) {
  return date.getDay() === 5;
}

function getAll13th(year) {
  var date = new Date(year, 0, 13);
  var all13th = [date];
  var newDate = new Date(date);

  for (month = 1; month <= 11; month++) {
    all13th.push(new Date(year, month, 13));
  }

  return all13th;
}

function fridayThe13ths(year) {
  var all13th = getAll13th(year);
  return all13th.filter(function(date) {
    return isFriday(date);
  }).length;
}