import test from "tape";
import merge from "../src/merge";

test("merge", function(t) {
  t.plan(2);
  t.deepEqual(merge([{ name: "Jesus" }], [{ age: 30 }]), [
    {
      name: "Jesus",
      age: 30
    }
  ]);

  t.deepEqual(
    merge([{ name: "Jesus" }, { name: "John" }], [{ age: 30 }, { age: 29 }]),
    [
      {
        name: "Jesus",
        age: 30
      },
      {
        name: "John",
        age: 29
      }
    ]
  );
});
