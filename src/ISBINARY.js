
export function ISBINARY(number) {
    return (/^[01]{1,10}$/).test(number);
};
