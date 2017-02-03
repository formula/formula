import isnumber from './isnumber'
import error from './error'

// Return the hyperbolic cotangent of a hyperbolic angle.
export default function coth(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  var e2 = Math.exp(2 * number);
  return (e2 + 1) / (e2 - 1);
}
