
export function ISODD(value) {
    return (Math.floor(Math.abs(value)) & 1) ? true : false;
}
