// Copyright 2015 Peter W Moresi

// Returns true when the value is a finite number.
export function ISNUMBER(value) {
    return typeof(value) === 'number' && !isNaN(value) && isFinite(value);
}
