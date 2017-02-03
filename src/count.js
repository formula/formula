fn.COUNT = function () {
var count = 0,
  v = arguments,
  i = v.length - 1;

if (i < 0) {
  return count;
}

do {
  if (v[i] !== null) {
count++;
  }
} while (i--);

return count;
}
