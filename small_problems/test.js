function isEmpty(value) {
  var type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (Array.isArray(value)) {
    return (value.length === 0);
  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  }
}