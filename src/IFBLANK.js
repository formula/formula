import {ISBLANK} from './ISBLANK';

export function IFBLANK(value, value_if_blank) {
    return ISBLANK(value) ? value_if_blank : value;
}
