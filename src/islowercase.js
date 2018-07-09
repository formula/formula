// Copyright 2015-2018 FormBucket LLC

const aCode = 97;
const zCode = 122;

function isLowerCaseChar(ch) {
  let chCode = ch.charCodeAt();
  return chCode >= aCode && chCode <= zCode;
}

export default function islowercase(str) {
  for (var i in str) {
    if (!isLowerCaseChar(str[i])) return false;
  }
  return true;
}
