// Copyright 2015-2021 JC Fisher

import { SecondsInDay, SecondsInHour, SecondsInMinute } from "./constants";
import isDate from "./isdate";
import trunc from "./trunc";

export default function second(value) {
  if (isDate(value)) {
    return value.getSeconds();
  }

  // calculate total seconds
  var totalSeconds = (value - trunc(value)) * SecondsInDay;

  // calculate number of seconds for hour component
  var hourSeconds = trunc(totalSeconds / SecondsInHour) * SecondsInHour;

  // calculate number of seconds in minute component
  var minuteSeconds =
    trunc((totalSeconds - hourSeconds) / SecondsInMinute) * SecondsInMinute;

  // remove seconds for hours and minutes and round to nearest value
  return Math.round(totalSeconds - hourSeconds - minuteSeconds);
}
