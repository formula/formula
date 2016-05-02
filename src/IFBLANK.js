// Copyright 2015 Peter W Moresi

import {ISBLANK} from './ISBLANK';

// IFBLANK return the `value` if non-blank, otherwise it returns `value_if_blank`.
export function IFBLANK(value, value_if_blank) {
    return ISBLANK(value) ? value_if_blank : value;
}
