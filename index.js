/*Prompt user for string
When they view the browser console, they observe a table 
listing how many of each flavor they have ordered. In this 
case, they will be able to observe that they have ordered 
three vanilla, two coffee, and one strawberry froyo.


let userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,coffee,strawberry"
);

let order = userInputString.split(",");

let orderCount = {};

for (let i = 0; i < order.length; i++){
    let currentOrder = order[i];
    if (orderCount[order]){
        orderCount[order]++;
    } else {
        orderCount[order] = 1;
    }
}
console.log(orderCount);

let orderArray = [];
for (let order in orderCount) {
    orderArray.push({Flavor: order, Count: orderCount[order]});
}

console.table(orderArray);
*/

// Prompt the user for froyo flavors
let userInput = prompt("Please enter a list of comma-separated froyo flavors:");

// Split the input into an array
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

// Display the results in the browser console
console.table(flavorArray);