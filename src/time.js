import {SecondsInDay} from './constants'

export function time(hour, minute, second) {
  return +((hour*3600 + minute*60 + second) / SecondsInDay).toFixed(15);
}
