// Copyright 2015 Peter W Moresi
import {isnumber} from './isnumber'

// Returns true when the value is a whole number
export function iswholenumber(value) {
    return isnumber(value) && (value % 1 === 0);
}
