// adapted http://rosettacode.org/wiki/Greatest_common_divisor#JavaScript
export default function gcd(...range) {
  // var utils = workbook.fn;
  // var range = utils.parseNumberArray(utils.flatten(arguments));
  // if (range instanceof Error) {
  //   return range;
  // }

  var n = range.length;
  var r0 = range[0];
  var x = r0 < 0 ? -r0 : r0;
  for (var i = 1; i < n; i++) {
    var ri = range[i];
    var y = ri < 0 ? -ri : ri;
    while (x && y) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    x += y;
  }
  return x;

};
