export default function offset(ref, rows, cols, height, width) {
    var topLeft, bottomRight,
        rowsVal = 0, colsVal = 0;

    // handle case when cell object is placed in.
    // reference is the string value (e.g. A1)
    var isCell = fn.ISCELL(ref);
    var reference = isCell ? ref.addr() : ref;

    try {


        if (reference.indexOf(':') > 0) {
            topLeft = workbook.cellInfo(reference.split(':')[0]);
        } else {
            topLeft = workbook.cellInfo(reference);
        }

        // clone object to avoid messing with memorized cells
        topLeft = JSON.parse(JSON.stringify(topLeft));

        if (fn.ISBLANK(rows) || fn.ISBLANK(cols)) {
            return error.na;
        }

        rowsVal = fn.ISCELL(rows) ? rows.valueOf() : rows;
        colsVal = fn.ISCELL(cols) ? cols.valueOf() : cols;

        if (fn.ISERROR(rowsVal) || fn.ISERROR(colsVal)) {
            return error.na;
        }

        topLeft.rowIndex += rowsVal;
        topLeft.colIndex += colsVal;

        bottomRight = JSON.parse(JSON.stringify(topLeft));

        if (typeof height !== "undefined" && typeof height === "number") {
            bottomRight.rowIndex += width;
        }

        if (typeof height !== "undefined" && typeof width === "number") {
            bottomRight.colIndex += height;
        }

        var _s = function(point) { return workbook.toColumn(point.colIndex) + (point.rowIndex+1).toString(); }
        topLeft = _s(topLeft);
        bottomRight =  _s(bottomRight);
        if (topLeft === bottomRight) {
            return ref.workbook.cell(ref.sheetIndex, topLeft);
        } else {
            return ref.workbook.range(ref.sheetIndex, topLeft, bottomRight);
        }

    } catch (e) {
        return workbook.errors.value;
    }
};
