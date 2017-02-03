import isnumber from './isnumber'
import error from './error'

// Return the hyperbolic cosine of a given number
export default function cosh(number) {

  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return (Math.exp(number) + Math.exp(-number)) / 2;
}
