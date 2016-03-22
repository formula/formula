import {ISBLANK} from './ISBLANK'

export function ISRANGE(v) {
  return (!ISBLANK(v) && v.constructor.name === 'RANGE');
}
