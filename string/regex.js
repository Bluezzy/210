function isUrl(string) {
  return !!string.match(/^https?:\/\/\S+$/);
}

function fields(text) {
  return text.split(/\W+/);
}

function mysteryMath(operation) {
  return operation.replace(/[\+\-\*\/]/, '?')
}

function mysteriousMath(operation) {
  return operation.replace(/[\+\-\*\/]/g, "?")
}

function danish(string) {
  return string.replace(/(apple|blueberry|cherry)/, 'danish')
}

function formatDate(originalDate) {
  return originalDate.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')
                     .replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1');
  };
}