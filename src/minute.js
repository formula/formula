// Copyright 2015-2021 JC Fisher

import { SecondsInDay, SecondsInHour, SecondsInMinute } from "./constants";
import isDate from "./isdate";
import trunc from "./trunc";

export default function minute(value) {
  if (isDate(value)) {
    return value.getMinutes();
  }

  // calculate total seconds
  var totalSeconds = (value - trunc(value)) * SecondsInDay;
  // calculate number of seconds for hour components
  var hourSeconds = trunc(totalSeconds / SecondsInHour) * SecondsInHour;
  // calculate the number seconds after remove seconds from the hours and convert to minutes
  return trunc((totalSeconds - hourSeconds) / SecondsInMinute);
}
