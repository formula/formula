import isnumber from './isnumber'
import { ERRORTYPES as error } from './error'

// Return the arctangent (in radians) of the given number
export default function atan(x, y) {

  // Ensure value is a number
  if (!isnumber(x) || !isnumber(y) ) {
    return error.value;
  }

  // Compute value
  return Math.atan2(x, y);
}
