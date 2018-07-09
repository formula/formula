// Copyright 2015-2018 FormBucket LLC

import datevalue from "./datevalue";
import timevalue from "./timevalue";

export default function now() {
  var d = new Date();
  return datevalue(d.toLocaleDateString()) + timevalue(d.toLocaleTimeString());
}
