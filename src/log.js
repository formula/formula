import isnumber from './isnumber'
import error from './error'

export default function log(number, base=10) {

  if (!isnumber(number)) {
    return error.value;
  }

  if (!isnumber(base)) {
    return error.value;
  }

  return Math.log(number) / Math.log(base);

};
