
export function ISFUNCTION(f) {
    return f && Object.prototype.toString.call(f) == '[object Function]';
};
