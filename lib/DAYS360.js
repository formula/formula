'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DAYS360 = DAYS360;

var _PARSEBOOL = require('./PARSEBOOL');

var _PARSEDATE = require('./PARSEDATE');

function DAYS360(start_date, end_date, method) {
    method = (0, _PARSEBOOL.PARSEBOOL)(method);
    start_date = (0, _PARSEDATE.PARSEDATE)(start_date);
    end_date = (0, _PARSEDATE.PARSEDATE)(end_date);

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
        sd = start_date.getDate() === 31 ? 30 : start_date.getDate();
        ed = end_date.getDate() === 31 ? 30 : end_date.getDate();
    } else {
        var smd = new Date(start_date.getFullYear(), sm + 1, 0).getDate();
        var emd = new Date(end_date.getFullYear(), em + 1, 0).getDate();
        sd = start_date.getDate() === smd ? 30 : start_date.getDate();
        if (end_date.getDate() === emd) {
            if (sd < 30) {
                em++;
                ed = 1;
            } else {
                ed = 30;
            }
        } else {
            ed = end_date.getDate();
        }
    }
    return 360 * (end_date.getFullYear() - start_date.getFullYear()) + 30 * (em - sm) + (ed - sd);
}