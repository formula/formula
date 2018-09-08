import keys from "./keys";

// convert an object in an array of entries.
// Example: { foo: 'bar' } -> [['foo', 'bar']]
export default function entries(obj) {
  // Run native function if available.
  if (Object.entries) return Object.entries(obj);

  // Execute polyfill.
  // credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  var ownProps = keys(obj),
    i = ownProps.length,
    resArray = new Array(i); // preallocate the Array

  while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

  return resArray;
}
