// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK'
import {ISARRAY} from './ISARRAY'
import {ISTEXT} from './ISTEXT'

// ISEMPTY returns true when the value is blank, is an empty array or when it
// is an empty string.
export function ISEMPTY(value) {
    return (
      ISBLANK(value) ||
      ISARRAY(value) && value.length === 0 ||
      ISTEXT(value) && value === ''
    );
};
