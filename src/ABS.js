import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

export function ABS(value) {
  if (!ISNUMBER(value)) {
    return error.value;
  }
  return Math.abs(value);
}
