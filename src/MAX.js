import {FLATTEN} from './FLATTEN';
import {ISNUMBER} from './ISNUMBER';

export function MAX(...list) {
  return FLATTEN( list ).reduce((max, next) => {
    if (ISNUMBER(next)) {
      console.log(max, next)
      return Math.max(max, next);
    }

    return max;

  }, Number.NEGATIVE_INFINITY );
}
