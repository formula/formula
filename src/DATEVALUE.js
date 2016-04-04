import {PARSEDATE} from './PARSEDATE'
import {SERIAL} from './SERIAL'

export function DATEVALUE(d) {
  return SERIAL(PARSEDATE(d));
}
