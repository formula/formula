import {SecondsInHour, SecondsInMinute, SecondsInDay} from './constants'

export function timevalue(time_text) {
    // The JavaScript new Date() does not accept only time.
    // To workaround the issue we put 1/1/1900 at the front.

    var date = new Date("1/1/1900 " + time_text);

    if (date instanceof Error) {
        return date;
    }

    return (SecondsInHour * date.getHours() +
            SecondsInMinute * date.getMinutes() +
            date.getSeconds()) / SecondsInDay;
};
