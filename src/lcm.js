export default function lcm(...o) {
  // Credits: Jonas Raoni Soares Silva
  // var utils = workbook.fn;
  // var o = utils.parseNumberArray(utils.flatten(arguments));
  // if (o instanceof Error) {
  //   return o;
  // }
  
  for (var i, j, n, d, r = 1;
    (n = o.pop()) !== undefined;)
    {
      while (n > 1) {
        if (n % 2) {
          for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2) {
            //empty
          }
          d = (i <= j) ? i : n;
        } else {
          d = 2;
        }
        for (n /= d, r *= d, i = o.length; i;
          (o[--i] % d) === 0 && (o[i] /= d) === 1 && o.splice(i, 1))
          {
            //empty
          }
        }
      }
      return r;
    };
