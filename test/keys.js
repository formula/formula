import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import keys from "../src/keys";

test("keys", t => {
  t.plan(1);
  t.deepEqual(keys({ name: "Jesus", age: 100 }), ["name", "age"]);
});
