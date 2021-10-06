// Copyright 2015-2021 JC Fisher

import { SecondsInDay } from "./constants";

export default function time(hour, minute, second) {
  return +((hour * 3600 + minute * 60 + second) / SecondsInDay).toFixed(15);
}
