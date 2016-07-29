// Copyright 2015 Peter W Moresi

// ISBINARY returns true when the string is 1 to 10 characters in length and
// only contains 1 or 0s.
export function isbinary(number) {
    return (/^[01]{1,10}$/).test(number);
};
