import istruthy from './istruthy'

// returns a number with a fixed number of decimal places and optionally commas
export default function fixed(num, decimals, commas) {
    if (istruthy(commas)) { return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
    return num.toFixed(decimals);
}
