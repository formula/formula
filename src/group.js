import reduce from "./reduce";

// Group a list of objects by one or more fields.
export default function group(list, ...fields) {
  // Reduce the list into an object.
  return reduce(
    list,
    (acc, item) => {
      let parent = undefined,
        key;

      // Walk through each field and update the accumulator.
      fields.forEach((currentField, index) => {
        // The key is the value of the current item.
        key = item[currentField];

        // Handle the last field used to group.
        if (index === fields.length - 1) {
          if (!parent) {
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(item);
          } else {
            if (!parent[key]) {
              parent[key] = [];
            }
            parent[key].push(item);
          }

          // Handle the first k fields before the last field
        } else {
          if (!parent) {
            acc[key] = acc[key] || {};
            parent = acc[key];
          } else {
            parent[key] = parent[key] || {};
            parent = parent[key];
          }
        }
      });

      return acc;
    },
    {}
  );
}
