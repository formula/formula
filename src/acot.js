import isnumber from './isnumber'
import { ERRORTYPES as error } from './error'

// Return the arccotangent of a given number.
export default function acot(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return Math.atan(1 / number);
}
