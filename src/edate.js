import {parsedate} from './parsedate'
import {serial} from './serial'

export function edate(start_date, months) {
    start_date = parsedate(start_date);

    if (start_date instanceof Error) {
        return start_date;
    }
    if (isNaN(months)) {
        return error.value;
    }
    months = parseInt(months, 10);
    start_date.setMonth(start_date.getMonth() + months);
    return serial(start_date);
};
