import isnumber from './isnumber'
import error from './error'

// Returns the hyperbolic inverser cosine of a value.
export default function acosh(value) {

  if (!isnumber(value)) {
    return error.value;
  }

  return Math.log(value + Math.sqrt(value * value - 1));
};
