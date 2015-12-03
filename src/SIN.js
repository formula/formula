import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

export function SIN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.sin(value);

}
