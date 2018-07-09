// Copyright 2015-2018 FormBucket LLC

import { ERRORTYPES as error } from "./error";
import reduce from "./reduce";

// parse querystring into object
export default function parsequery(query = "") {
  if (typeof query !== "string") {
    return error.na;
  }

  if (query.length === 0) {
    return {};
  }

  return reduce(
    (query[0] === "?" ? query.substr(1) : query).split("&"),
    (acc, item) => {
      var n = item.split("=");
      var key = decodeURIComponent(n[0]);
      var value = decodeURIComponent(n[1] || "");
      acc[key] = value;
      return acc;
    },
    {}
  );
}
