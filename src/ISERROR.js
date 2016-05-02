// Copyright 2015 Peter W Moresi

import error from './ERROR';
import {ISERR} from './ISERR';

// ISERROR returns true when the value is an error.
export function ISERROR(value) {
    return ISERR(value) || value === error.na;
}
