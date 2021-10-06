// Copyright 2015-2021 JC Fisher

import decodebase64 from "./decodebase64";

export default function decodejwt(token) {
  function b64DecodeUnicode(str) {
    return decodeURIComponent(
      Array.prototype.map
        .call(decodebase64(str), function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }

  return JSON.parse(b64DecodeUnicode(token.split(".")[1]));
}
