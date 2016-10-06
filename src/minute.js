import {SecondsInDay, SecondsInHour, SecondsInMinute} from './constants'
import trunc from './trunc'

export default function minute(value) {
  // calculate total seconds
  var totalSeconds = (value-trunc(value)) * SecondsInDay;
  // calculate number of seconds for hour components
  var hourSeconds = trunc(totalSeconds / SecondsInHour) * SecondsInHour;
  // calculate the number seconds after remove seconds from the hours and convert to minutes
  return trunc( (totalSeconds - hourSeconds) / SecondsInMinute);
}
