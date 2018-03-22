import test from "tape";
import nor from "../fn/nor";

test("nor", function(t) {
  t.plan(10);
  t.equal(nor(true, true), !true);
  t.equal(nor(true, false), !true);
  t.equal(nor(1, 0), !true);
  t.equal(nor(false, true), !true);
  t.equal(nor(false, false, true), !true);
  t.equal(nor(false, false), !false);

  t.equal(nor(() => true, () => true), !true);
  t.equal(nor(() => true, () => false), !true);
  t.equal(nor(() => false, () => true), !true);
  t.equal(nor(() => false, () => false), !false);
});
