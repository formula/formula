import isnumber from './isnumber'
import error from './error'

export default function ln(number) {

  if (!isnumber(number)) {
    return error.value;
  }

  return Math.log(number);

};
