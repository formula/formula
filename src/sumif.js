export default function sumif(range, criteria) {
  var result = 0;

  for (var i = 0; i < range.length; i++) {
    result += (eval(range[i] + criteria)) ? range[i] : 0;
  }

  return result;
}
