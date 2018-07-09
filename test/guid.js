import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import guid from "../src/guid";

test("guid", t => {
  t.plan(1);
  t.equal(guid().length, 36);
});
