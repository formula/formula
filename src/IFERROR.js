// Copyright 2015 Peter W Moresi

import {ISERROR} from './ISERROR';

// IFBLANK return the `value` if error, otherwise it returns `value_if_error`.
export function IFERROR(value, value_if_error=null) {
    return ISERROR(value) ? value_if_error : value;
}
