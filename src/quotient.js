import error from './error'

export default function quotient(a, b) {
  var q = Math.floor( a / b );

  if (q !== q) {
    return error.value;
  }

  return q;

}
