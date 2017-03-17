// Copyright 2015 JC Fisher

import isempty from './isempty';

// IFBLANK return the `value` if empty, otherwise it returns `value_if_empty`.
export default function ifempty(value, value_if_empty) {
    return isempty(value) ? value_if_empty : value;
}
