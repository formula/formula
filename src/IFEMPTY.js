// Copyright 2015 Peter W Moresi

import {ISEMPTY} from './ISEMPTY';

// IFBLANK return the `value` if empty, otherwise it returns `value_if_empty`.
export function IFEMPTY(value, value_if_empty) {
    return ISEMPTY(value) ? value_if_empty : value;
}
