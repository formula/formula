
import {FLATTEN} from './FLATTEN';

export function SUM() {
    var numbers = FLATTEN(arguments);
    return numbers.reduce((a, b) => a + b);
}
