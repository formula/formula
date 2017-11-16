import isnumber from './isnumber'
import error from './error'

// Return the arctangent (in radians) of the given number
export default function atan(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return Math.atan(number);
}
