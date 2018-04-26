import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import minute from "../src/minute";

test("minute", t => {
  t.plan(4);
  t.equal(minute(1.2222), 19);
  t.equal(minute(2.5555), 19);
  t.equal(minute(42000.8181), 38);

  var d = new Date("Fri Apr 20 2018 00:04:20 GMT-0700 (PDT)");
  t.equal(minute(d), 4);
});
