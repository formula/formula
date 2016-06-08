// Copyright 2015 Peter W Moresi

import {parsebool} from './parsebool';
import {parsedate} from './parsedate';

export function days360(start_date, end_date, method) {
    method = parsebool(method);
    start_date = parsedate(start_date);
    end_date = parsedate(end_date);

    if (start_date instanceof Error) {
        return start_date;
    }
    if (end_date instanceof Error) {
        return end_date;
    }
    if (method instanceof Error) {
        return method;
    }
    var sm = start_date.getMonth();
    var em = end_date.getMonth();
    var sd, ed;
    if (method) {
        sd = start_date.getdate() === 31 ? 30 : start_date.getdate();
        ed = end_date.getdate() === 31 ? 30 : end_date.getdate();
    } else {
        var smd = new date(start_date.getFullYear(), sm + 1, 0).getdate();
        var emd = new date(end_date.getFullYear(), em + 1, 0).getdate();
        sd = start_date.getdate() === smd ? 30 : start_date.getdate();
        if (end_date.getdate() === emd) {
            if (sd < 30) {
                em++;
                ed = 1;
            } else {
                ed = 30;
            }
        } else {
            ed = end_date.getdate();
        }
    }
    return (
      360 * (end_date.getFullYear() - start_date.getFullYear()) + 30 * (em - sm) + (ed - sd)
    );
}
