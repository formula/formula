import { ERRORTYPES as error } from './error';

export default function floor(value, significance) {
  significance = significance || 1;

  if (value > 0 && significance < 0 ) {
    return error.num;
  }

  if (value >= 0) {
    return Math.floor(value / significance) * significance;
  } else {
    return Math.ceil(value / significance) * significance;
  }

}
