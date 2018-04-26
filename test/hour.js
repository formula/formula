import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import hour from "../src/hour";

test("hour", t => {
  t.plan(4);
  t.equal(hour(0.2222), 5);
  t.equal(hour(0.5555), 13);
  t.equal(hour(0.8181), 19);

  var d = new Date("Fri Apr 20 2018 04:04:20 GMT-0700 (PDT)");
  t.equal(hour(d), 4);
});
