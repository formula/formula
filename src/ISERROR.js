import error from './ERROR';
import {ISERR} from './ISERR';

export function ISERROR(value) {
    return ISERR(value) || value === error.na;
}
