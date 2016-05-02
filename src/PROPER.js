// Copyright 2015 Peter W Moresi

import error from './ERROR'

// PROPER converts text into proper case.
export function PROPER(text) {
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
