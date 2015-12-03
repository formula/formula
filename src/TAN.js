import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

export function TAN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.tan(value);

}
