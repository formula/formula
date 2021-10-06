// Copyright 2015-2021 JC Fisher

import serial from "./serial";

// date returns a serial number given a year, month and day.
export default function date(year, month, day) {
  return serial(new Date(year, month - 1, day));
}
