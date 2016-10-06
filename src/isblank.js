// Copyright 2015 Peter W Moresi

// ISBLANK returns true when the value is undefined or null.
export default function isblank(value) {
    return typeof value === 'undefined' || value === null;
};
