// Copyright 2015 WebsiteHQ LLC

// Returns true when the value is a finite number.
export default function isnumber(value) {
    return typeof(value) === 'number' && !Number.isNaN(value) && isFinite(value);
}
