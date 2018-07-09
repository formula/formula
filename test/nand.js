import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import nand from "../src/nand";

test("nand", t => {
  t.plan(16);

  // literal values
  t.equal(nand(true, true), !true);
  t.equal(nand(true, false), !false);
  t.equal(nand(false, true), !false);
  t.equal(nand(true, true, true), !true);
  t.equal(nand(true, false, true), !false);
  t.equal(nand(1, 1, 0), !false);
  t.equal(nand(1, 1, 1), !true);
  t.equal(nand(1, 1, 1, 1, 1, 1, 1), !true);
  t.equal(nand(1, "foo", 0), error.value);
  t.equal(nand(1, NaN, 0), error.value);
  t.equal(nand(0, 1, 1), !false);
  t.equal(nand(false, 1, 1), !false);

  // deferred values
  t.equal(nand(() => true, () => true), !true);
  t.equal(nand(() => true, () => false), !false);
  t.equal(nand(() => false, () => true), !false);
  t.equal(nand(() => false, () => false), !false);
});
