// Copyright 2015 WebsiteHQ LLC

import isfalsy from './isfalsy'

// Returns true when the value is not falsey
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
export default function istruthy(value) {
    return !isfalsy(value)
};
