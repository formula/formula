fn.COUNTIF = function(range, criteria) {
    range = fn.flatten(range);
    if (!/[<>=!]/.test(criteria)) {
        criteria = '=="' + criteria + '"';
    }
    var matches = 0;
    for (var i = 0; i < range.length; i++) {
        if (typeof range[i] !== 'string') {

            if (fn.ISERROR(range[i])) { continue; }
            if (eval(range[i] + criteria)) {
                matches++;
            }
        } else {
            if (eval('"' + range[i] + '"' + criteria)) {
                matches++;
            }
        }
    }
    return matches;
};
