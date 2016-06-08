// Copyright 2015 Peter W Moresi

// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
export function flatten(ref){
    return ref.reduce(function(a, b) {
      return a.concat(b);
    }, []);
}
