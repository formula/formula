import isnumber from './isnumber'
import error from './error'

// Return the cotangent of an angle specified in radians.
export default function cot(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return 1 / Math.tan(number);
}
