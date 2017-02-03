import isnumber from './isnumber'
import error from './error'

// Return the inverse sin of a given number
export default function asin(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return Math.asin(number);
}
