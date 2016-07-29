// Copyright 2015 Peter W Moresi

import {iserror} from './iserror';

// IFBLANK return the `value` if error, otherwise it returns `value_if_error`.
export function iferror(value, value_if_error=null) {
    return iserror(value) ? value_if_error : value;
}
