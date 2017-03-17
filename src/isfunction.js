// Copyright 2015 JC Fisher

// ISFUNCTION returns true when `value` is a function.
export default function isfunction(value) {
    return value && Object.prototype.toString.call(value) == '[object Function]';
};
