/* Isolate the column from a cell index */
import {MaxCols} from './CONSTANTS';
import {INDEX2ROW} from './INDEX2ROW';

export function INDEX2COL(index) {
  return index - (INDEX2ROW(index) * MaxCols);
}
