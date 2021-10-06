// Copyright 2015-2021 JC Fisher
import isarray from "./isarray";
import reduce from "./reduce";

// SELECT fields from o
export default function select(fields, o) {
  // non-json
  if (!o || "object" != typeof o) return;

  // check for fields
  if (!fields) return;

  // split
  if ("string" == typeof fields) fields = fields.split(/ *, */);

  // fields array
  if (isarray(o)) {
    return o.map(function(obj) {
      return reduce(
        fields,
        function(ret, key) {
          ret[key] = obj[key];
          return ret;
        },
        {}
      );
    });

    return;
  }

  // fields o
  return reduce(
    fields,
    function(ret, key) {
      ret[key] = o[key];
      return ret;
    },
    {}
  );
}
