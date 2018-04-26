import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import second from "../src/second";

test("second", t => {
  t.plan(5);
  t.equal(second(42020.2222), 58);
  t.equal(second(0.2222), 58);
  t.equal(second(0.5555), 55);
  t.equal(second(0.8181), 4);

  var d = new Date("Fri Apr 20 2018 00:04:20 GMT-0700 (PDT)");
  t.equal(second(d), 20);
});
