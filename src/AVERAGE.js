import {SUM} from './SUM';

export function AVERAGE(...items) {
  return SUM(...items) / items.length;
}
