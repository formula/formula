fn.FACTDOUBLE = function(number) {
  number = fn.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  var n = Math.floor(number);
  if (n <= 0) {
    return 1;
  } else {
    return n * fn.FACTDOUBLE(n - 2);
  }
};
