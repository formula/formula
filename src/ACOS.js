import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

export function ACOS(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.acos(value);

}
