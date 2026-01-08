// ==========================================
// TASK 1: Empty Multidimensional Array
// ==========================================
var multiArray = [[], []];


// ==========================================
// TASK 2: Matrix Initialization
// ==========================================
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];


// ==========================================
// TASK 3: Print Counting 1 to 10
// ==========================================
console.log("Counting 1 to 10:");
for (var i = 1; i <= 10; i++) {
  console.log(i);
}


// ==========================================
// TASK 4: Multiplication Table with User Input
// ==========================================
var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length of multiplication table");

console.log("\nMultiplication table of " + tableNumber);
console.log("Length " + tableLength);

for (var i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// ==========================================
// TASK 5: Fruits Array with Indexing
// ==========================================
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Printing items
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Printing items with index
for (var j = 0; j < fruits.length; j++) {
  console.log("Element at index " + j + " is " + fruits[j]);
}


// ==========================================
// TASK 6: Number Series Generation
// ==========================================

// a. Counting: 1 to 15
var counting = "";
for (var i = 1; i <= 15; i++) {
  counting += i + (i === 15 ? "" : ", ");
}
console.log("\nCounting: " + counting);

// b. Reverse counting: 10 to 1
var reverse = "";
for (var i = 10; i >= 1; i--) {
  reverse += i + (i === 1 ? "" : ", ");
}
console.log("Reverse counting: " + reverse);

// c. Even: 0 to 20
var even = "";
for (var i = 0; i <= 20; i += 2) {
  even += i + (i === 20 ? "" : ", ");
}
console.log("Even: " + even);

// d. Odd: 1 to 19
var odd = "";
for (var i = 1; i <= 19; i += 2) {
  odd += i + (i === 19 ? "" : ", ");
}
console.log("Odd: " + odd);

// e. Series: 2k to 20k
var seriesK = "";
for (var i = 2; i <= 20; i += 2) {
  seriesK += i + "k" + (i === 20 ? "" : ", ");
}
console.log("Series: " + seriesK);

