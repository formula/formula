import {COND} from './COND'

export function SWITCH(...cases) {
  return COND(...cases);
};
