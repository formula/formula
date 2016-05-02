// Copyright 2015 Peter W Moresi

import {COND} from './COND'

// SWITCH is alias for COND
export function SWITCH(...cases) {
  return COND(...cases);
};
