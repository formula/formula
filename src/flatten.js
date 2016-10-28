// Copyright 2015 WebsiteHQ LLC

// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
export default function flatten(ref){
    return ref.reduce(function(a, b) {
      return a.concat(b);
    }, []);
}
