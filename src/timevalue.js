import {SecondsInHour, SecondsInMinute, SecondsInDay} from './constants'

export function timevalue(time_text) {
    // The JavaScript new Date() does not accept only time.
    // To workaround the issue we put 1/1/1900 at the front.

    var last2Characters = time_text.substr(-2).toUpperCase();
    var date;

    if (time_text.length === 7 && (last2Characters === AM || last2Characters === PM)) {
        time_text = "1/1/1900 " + time_text.substr(0, 5) + " " + last2Characters;
    } else if (time_text.length < 9) {
        time_text = "1/1/1900 " + time_text;
    }

    date = new Date(time_text);

    if (date instanceof Error) {
        return date;
    }

    return (SecondsInHour * date.getHours() +
            SecondsInMinute * date.getMinutes() +
            date.getSeconds()) / SecondsInDay;
};
