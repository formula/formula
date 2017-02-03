import isnumber from './isnumber'
import error from './error'

// Return the arccotangent of a given number
export default function acoth(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return 0.5 * Math.log((number + 1) / (number - 1));
}
