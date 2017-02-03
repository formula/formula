import isnumber from './isnumber'
import error from './error'

// Returns e raised to the power of number.
export default function exp(x) {

  // Ensure value is a number
  if (!isnumber(x)) {
    return error.value;
  }

  return Math.pow(Math.E, x);
}
