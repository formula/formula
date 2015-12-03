import {d1900, MilliSecondsInDay} from './CONSTANTS';
import error from './ERROR';

// Convert a date object into a serial number.
// Credit: https://github.com/sutoiku/formula.js/
export function SERIAL(date) {
    if (date.constructor.name !== 'Date') return error.na;
    var diff = Math.ceil((date - d1900) / MilliSecondsInDay)
    return diff + ( diff > 59 ? 2 : 1);
}
