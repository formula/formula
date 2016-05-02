// Copyright 2015 Peter W Moresi

// ISFUNCTION returns true when `value` is a function.
export function ISFUNCTION(value) {
    return value && Object.prototype.toString.call(value) == '[object Function]';
};
