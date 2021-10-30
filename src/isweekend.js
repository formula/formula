
var WEEKEND_TYPES = [
    [],
    [6, 0],
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    undefined,
    undefined,
    undefined, [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6]
];

export default function isweekend(day, type = 1) {
    var weekend = WEEKEND_TYPES[type]
    var day_ = day.getDay();
    return (day_ === weekend[0] || day_ === weekend[1]);
}
