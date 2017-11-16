import isnumber from './isnumber'
import error from './error'

// Return the inverse hyperbolic sin of a given number
export default function asinh(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return Math.log(number + Math.sqrt(number * number + 1));
}
