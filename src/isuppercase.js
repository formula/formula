// Copyright 2015-2021 JC Fisher

const ACode = 65;
const ZCode = 90;

function isUpperCaseChar(ch) {
  let chCode = ch.charCodeAt();
  return chCode >= ACode && chCode <= ZCode;
}

export default function isuppercase(str) {
  for (var i in str) {
    if (!isUpperCaseChar(str[i])) return false;
  }
  return true;
}
