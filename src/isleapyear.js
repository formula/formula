import {parsedate} from './parsedate'

export function isleapyear(val) {
    var date = parsedate(val);
    var year = date.getFullYear();
    return (((year % 4 === 0) && (year % 100 !== 0)) ||
            (year % 400 === 0));
}
