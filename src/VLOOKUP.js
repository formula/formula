import error from './ERROR';
import {ISBLANK} from './ISBLANK';

export function VLOOKUP(needle, table, index, exactmatch) {

    if ( ISERROR(needle) || ISBLANK(needle) ) {
        return needle;
    }

    index = index || 0;
    exactmatch = exactmatch || false;
    for (var i = 0; i < table.length; i++){
        var row = table[i];
        if ((exactmatch && row[0]===needle) ||
            ((row[0] === needle) ||
             (typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1) )) {
            return (index < (row.length+1) ? row[index-1] : row[0]);
        }
    }

    return error.na;

}
