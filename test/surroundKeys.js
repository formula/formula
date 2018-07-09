import test from "tape";
import surroundKeys from "../src/surroundKeys";

test("surroundKeys", function(t) {
  t.plan(2);
  t.deepEqual(surroundKeys({ first: "Tom", "last name": "Jones" }), {
    "-first-": "Tom",
    "-last name-": "Jones"
  });

  t.deepEqual(
    surroundKeys({ first: "Tom", "last name": "Jones" }, "<%", "%>"),
    { "<%first%>": "Tom", "<%last name%>": "Jones" }
  );
});
