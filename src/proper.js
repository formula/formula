// Copyright 2015 JC Fisher

import error from './error'
import isNaN from './isnan'

// PROPER converts text into proper case.
export default function proper(text) {
    if (text === undefined || text.length === 0) {
        return error.value;
    }
    if (text === true) {
        text = 'TRUE';
    }
    if (text === false) {
        text = 'FALSE';
    }
    if (isNaN(text) && typeof text === 'number') {
        return error.value;
    }
    if (typeof text === 'number') {
        text = '' + text;
    }

    return text.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
