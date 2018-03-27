import isnumber from './isnumber'
import { ERRORTYPES as error } from './error'

// Converts radians into degrees.
export default function degrees(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return number * 180 / Math.PI;
}
