// input : any string with 3 type of characters :
//  - lowercase, uppercase letter and non-alphabetical characters.
// - at least one characters is assumed

// output : an object containing ratio of each type of characters in the string.

// requirements : - count how many lowercases, uppercases, neither-of-them characters are they.
// - compare those numbers to the string characters total to get percentage.
// - present the results in an object with the type of characters as keys and their percentage as values.

// algorithm :
// - split the string into characters.
// - calculate the total number of characters, store the value in a var named total
// - with regex, find the matches for each type of characters and use the resulting array's length to get the count for each case.
// - get the results into an object with the type of character as key and the percentage count, using 100, the total and the count*
//     (in this case, write a small function to calculate a percentage based on count, total and 100. truncate to 2 decimals).
//     ( percentage : Number(String((count * 100) / total).toFixed(2));


function percentage(count, total) {
  var percentage = (count * 100.00) / total;
  return parseFloat(percentage).toFixed(2);
}

function letterPercentages(string) {
  var percentages = {};
  var lowercaseCount = (string.match(/[a-z]/g) || []).length;
  var uppercaseCount = (string.match(/[A-Z]/g) || []).length;
  var neitherCount = string.length - (lowercaseCount + uppercaseCount);

  percentages.lowercase = percentage(lowercaseCount, string.length);
  percentages.uppercase = percentage(uppercaseCount, string.length);
  percentages.neither = percentage(neitherCount, string.length);

  return percentages;
}