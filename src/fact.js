import isx from './isx'
import error from './error'
import numbervalue from './xvalue'

// Returns e raised to the power of x.
export default function fact(x) {
  x = numbervalue(x);

  if (x instanceof Error) {
    return x;
  }

  var n = Math.floor(x);

  if (n === 0 || n === 1) {
    return 1;
  } else if (MEMOIZED_FACT[n] > 0) {
    return MEMOIZED_FACT[n];
  } else {
    MEMOIZED_FACT[n] = fn.FACT(n - 1) * n;
    return MEMOIZED_FACT[n];
  }

}
