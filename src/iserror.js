// Copyright 2015 Peter W Moresi

import error from './error';
import iserr from './iserr';

// ISERROR returns true when the value is an error.
export default function iserror(value) {
    return iserr(value) || value === error.na;
}
