import parseDate from "./parsedate";
import parseNumber from "./n";
import serial from "./serial";
import isweekend from "./isweekend";

export default function workday(startDate, days, holidays) {
    return serial(WORKDAY_INTL(startDate, days, 1, holidays));
  };

function WORKDAY_INTL(startDate, days, weekend=1, holidays) {
    startDate = parseDate(startDate);
    if (startDate instanceof Error) {
        return startDate;
    }
    days = parseNumber(days);
    if (days instanceof Error) {
        return days;
    }
    if (days < 0) {
        return error.num;
    }

    if (holidays === undefined) {
        holidays = [];
    } else if (!(holidays instanceof Array)) {
        holidays = [holidays];
    }
    for (var i = 0; i < holidays.length; i++) {
        var h = parseDate(holidays[i]);
        if (h instanceof Error) {
            return h;
        }
        holidays[i] = h;
    }
    var d = 0;
    while (d < days) {
        startDate.setDate(startDate.getDate() + 1);
        if (isweekend(startDate, weekend)) {
            continue;
        }
        for (var j = 0; j < holidays.length; j++) {
            var holiday = holidays[j];
            if (holiday.getDate() === startDate.getDate() &&
                holiday.getMonth() === startDate.getMonth() &&
                holiday.getFullYear() === startDate.getFullYear()) {
                d--;
                break;
            }
        }
        d++;
    }
    return startDate;
};
