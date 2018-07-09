import test from "tape";
import _error, { ERRORTYPES as error } from "../src/error";

test("error", t => {
  t.plan(22);
  t.equal(error.nil.toString(), "#NULL!");
  t.equal(error.div0.toString(), "#DIV/0!");
  t.equal(error.value.toString(), "#VALUE!");
  t.equal(error.ref.toString(), "#REF!");
  t.equal(error.name.toString(), "#NAME?");
  t.equal(error.num.toString(), "#NUM!");
  t.equal(error.na.toString(), "#N/A!");
  t.equal(error.error.toString(), "#ERROR!");
  t.equal(error.data.toString(), "#GETTING_DATA!");
  t.equal(error.missing.toString(), "#MISSING!");
  t.equal(error.unknown.toString(), "#UNKNOWN!");

  t.equal(_error("#NULL!").toString(), "#NULL!");
  t.equal(_error("#DIV/0!").toString(), "#DIV/0!");
  t.equal(_error("#VALUE!").toString(), "#VALUE!");
  t.equal(_error("#REF!").toString(), "#REF!");
  t.equal(_error("#NAME?").toString(), "#NAME?");
  t.equal(_error("#NUM!").toString(), "#NUM!");
  t.equal(_error("#N/A!").toString(), "#N/A!");
  t.equal(_error("#ERROR!").toString(), "#ERROR!");
  t.equal(_error("#GETTING_DATA!").toString(), "#GETTING_DATA!");
  t.equal(_error("#MISSING!").toString(), "#MISSING!");
  t.equal(_error("#UNKNOWN!").toString(), "#UNKNOWN!");
});
