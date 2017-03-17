// Copyright 2015 JC Fisher

// Returns true when the value is a finite number.
export default function isnumber(value) {
    return typeof(value) === 'number' && !Number.isNaN(value) && isFinite(value);
}
