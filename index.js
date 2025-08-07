let flavors = prompt("Enter froyo flavors (comma-separated): ");

// console.log("Froyo Flavors String: ", flavors);

// Convert the input string to an array
let flavorsArray = flavors.split(",");

// console.log("Froyo Flavors Array: ", flavorsArray);

function count(array) {
  let flavorsCount = {};
  for (let i = 0; i < array.length; i++) {
    if (flavorsCount[array[i]]) {
      flavorsCount[array[i]]++;
    } else {
      flavorsCount[array[i]] = 1;
    }
  }
  return flavorsCount;
}

let flavorsCount = count(flavorsArray);

console.log("How Many of Each Flavor You Ordered: ", flavorsCount);
