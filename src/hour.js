import {trunc} from './trunc'

export function hour(value) {
    // remove numbers before decimal place and convert fraction to 24 hour scale.
    return trunc((value - trunc(value)) * 24);
}
