import {PARSEDATE} from './PARSEDATE'

export function DATE(d) {
  return SERIAL(PARSEDATE(d));
}
