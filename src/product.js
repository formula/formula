export default function product(...range) {
  var result = range[0];

  for (var i = 1; i < range.length; i++) {
    result *= range[i];
  }

  return result;
}
