// Copyright 2015 Peter W Moresi

import error from './ERROR'

// TRIMS returns a string without whitespace at the beginning or end.
export function TRIM(text) {
    if (typeof text !== 'string') {
        return error.value;
    }
    return text.trim();
}
