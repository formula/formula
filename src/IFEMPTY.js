import {ISEMPTY} from './ISEMPTY';

export function IFEMPTY(value, value_if_empty) {
    return ISEMPTY(value) ? value_if_empty : value;
}
