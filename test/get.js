import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import get from "../src/get";

test("get", t => {
  t.plan(1);
  t.deepEqual(get("name", { name: "Peter" }), "Peter");
});
