const froyo = prompt('Froyo flavors');
const flavors = froyo.split (",");


console.log(flavors);

// Declare a function that takes an array as a param and returns object with the counts of each element
function countFlavors(froyoArray) {
  // Create an empty object to store counts
  let objCounts = {};

  // Loop through array
  for (let froyoElement of froyoArray) {
    // If the element is not in the object set its count to zero
    if (!counts[froyoElement]) {
      counts[froyoElement] = 0;
    }

    // Increment the count by one
    objcountscounts[froyoElement]++;
  }

  // Returns counts object
  return objCounts;
}

// Display counts object as a table
console.table(countFlavors(flavors));