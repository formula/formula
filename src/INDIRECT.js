/* Returns a cell indirection
 */
import {CELL} from './CELL';

export function INDIRECT(ref) {
  console.log( this )
  return new CELL(this, ref.index);
}
