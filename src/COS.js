import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

export function COS(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.cos(value);

}
