export default function floor(value, significance) {
  significance = significance || 1;

  if (
    (value < 0 && significance > 0 )
    || (value > 0 && significance < 0 )
  ) {
    var result = new Number(0);
    return result;
  }
  if (value >= 0) {
    return Math.floor(value / significance) * significance;
  } else {
    return Math.ceil(value / significance) * significance;
  }

}
