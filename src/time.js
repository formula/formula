// Copyright 2015-2018 FormBucket LLC

import { SecondsInDay } from "./constants";

export default function time(hour, minute, second) {
  return +((hour * 3600 + minute * 60 + second) / SecondsInDay).toFixed(15);
}
