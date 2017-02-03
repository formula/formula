import isnumber from './isnumber'
import error from './error'

// Return the hyperbolic cosecant of an angle specified in radians.
export default function csch(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return 2 / (Math.exp(number) - Math.exp(-number));
}
