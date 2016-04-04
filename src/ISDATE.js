export function ISDATE(d) {
    return d && Object.prototype.toString.call(d) == '[object Date]';
};
