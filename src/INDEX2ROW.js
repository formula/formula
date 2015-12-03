/* Isolate the row from a cell index */
import {MaxCols} from './CONSTANTS';

export function INDEX2ROW(index) {
  return Math.floor(index / MaxCols);
}
