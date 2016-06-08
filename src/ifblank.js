// Copyright 2015 Peter W Moresi

import {isblank} from './isblank';

// IFBLANK return the `value` if non-blank, otherwise it returns `value_if_blank`.
export function ifblank(value, value_if_blank) {
    return isblank(value) ? value_if_blank : value;
}
