/*Prompt user for string
When they view the browser console, they observe a table 
listing how many of each flavor they have ordered. In this 
case, they will be able to observe that they have ordered 
three vanilla, two coffee, and one strawberry froyo.


*/

// Prompt for froyo flavors
let userInput = prompt("Please enter a list of comma-separated froyo flavors:");

// Make The Array
let flavors = userInput.split(',');

// Count the occurrences of each flavor
let flavorCount = {};
for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i].trim().toLowerCase(); // Ensure consistency
    if (flavorCount[flavor]) {
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1;
    }
}

// Convert the object to an array of objects for display in console.table
let flavorArray = [];
for (let flavor in flavorCount) {
    flavorArray.push({Flavor: flavor, Count: flavorCount[flavor]});
}

// Display as a table
console.table(flavorArray);