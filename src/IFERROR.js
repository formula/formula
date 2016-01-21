import {ISERROR} from './ISERROR';

export function IFERROR(value, value_if_error=null) {
    return ISERROR(value) ? value_if_error : value;
}
