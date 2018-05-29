function sum(n) {
  var digits = String(n).split('').map(function(digitString) {
    return Number(digitString)
  });
  return digits.reduce(function(sum, value) {
    return sum + value;
  });
}

function alphabeticNumberSort(integers) {
  var wordNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  var selectedWordNumbers = integers.map(function(integer) {
    return wordNumbers[integer];
  });
  var sortedWordNumbers = selectedWordNumbers.sort();
  return sortedWordNumbers.map(function(word) {
    return wordNumbers.indexOf(word);
  });
}

function multiplyAllPairs(arr1, arr2) {
  var multiples = [];
  arr1.forEach(function(number) {
    arr2.forEach(function(num) {
      multiples.push(number * num)
    });
  });
  return multiples.sort(numberSort);
}

function numberSort(n1, n2) {
  if (n1 > n2) {
    return 1;
  } else if (n1 < n2) {
    return -1;
  } else {
    return 0;
  }
}

function sumOfSums(numbers) {
  var lastIndex;
  var total = 0;

  for (lastIndex = 1; lastIndex <= numbers.length; lastIndex++) {
    total += numbers.slice(0, lastIndex).reduce(function(sum, value) {
      return sum + value;
    });
  }
  return total;
}

function substringAtStart(str) {
  return str.split('').map(function (char, idx) {
    return str.split('').slice(0, idx + 1).reduce(function(string, character) {
      return string += character;
    });
  });
}

function substring(str) {
  var i;
  var result = [];
  for (i = 0; i < str.length; i++) {
    result.push(substringAtStart(str.slice(i)));
  }
  return result.reduce(function(array, subArray) {
    return array.concat(subArray);
  });
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return false;
  }
  return string === string.split('').reverse().join('');
}

function palindromes(string) {
  return substring(string).filter(function(substring) {
    return isPalindrome(substring);
  });
}

function buyFruit(groceryList) {
  return groceryList.map(function(product) {
    return product.reduce(function(name, quantity) {
      var items = [];
      var i;
      for (i = 1; i <= quantity; i++) {
        items.push(name)
      }
      return items;
    });
  }).reduce(function(allItems, newItems) {
    return allItems.concat(newItems);
  });
}

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function(transaction) {
    return transaction.id === inventoryItem;
  });
}

function isItemAvailable(inventoryItem, transactions) {
  var itemTransactionsIn = transactionsFor(inventoryItem, transactions).filter(function(inventory) {
    return inventory.movement === 'in';
  });
  var itemTransactionsOut = transactionsFor(inventoryItem, transactions).filter(function(inventory) {
    return inventory.movement === 'out';
  });
  var quantityIn = countQuantity(itemTransactionsIn);
  var quantityOut = countQuantity(itemTransactionsOut);
  return quantityIn - quantityOut > 0;
}

function countQuantity(itemTransactions) {
  return itemTransactions.map(function(inventory) {
    return inventory.quantity;
  }).reduce(function(total, value) {
    return total + value;
  }, 0);
}







