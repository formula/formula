import test from 'tape';
import group from '../fn/group';

test('group', function(t) {

  t.plan(3);

  let data = [{
    a: "one",
    b: "one",
    c: "one"
  }, {
    a: "one",
    b: "two",
    c: "two"
  }, {
    a: "two",
    b: "three",
    c: "three"
  }];

  t.deepEqual( group(data, "a"), {
    one: [{
      a: "one",
      b: "one",
      c: "one"
    }, {
      a: "one",
      b: "two",
      c: "two"
    }],
    two: [{
      a: "two",
      b: "three",
      c: "three"
    }]
  });

  t.deepEqual( group(data, "a", "b"), {
    one: {
        one: [{
          a: "one",
          b: "one",
          c: "one"
        }],
        two: [{
          a: "one",
          b: "two",
          c: "two"
        }]
    },
    two: {
        three: [{
          a: "two",
          b: "three",
          c: "three"
        }]
    }
  });

  t.deepEqual( group(data, "a", "b", "c"), {
    one: {
      one: {
        one: [{
          a: "one",
          b: "one",
          c: "one"
        }]
      },
      two: {
        two:
        [{
          a: "one",
          b: "two",
          c: "two"
        }]
      }
    },
    two: {
      three: {
        three:
        [{
          a: "two",
          b: "three",
          c: "three"
        }]
      }
    }
  });

});
