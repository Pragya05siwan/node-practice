// Question 1: Number Methods

// Create the following variable:

// ```
// let price = 459.6789;
// ```

// Perform these tasks:

// 1. Print the price with 2 decimal places using `toFixed()`.
// 2. Check whether the price is an integer using `Number.isInteger()`.
// 3. Convert `"250"` into a number using `Number()`.
// 4. Convert `"Hello123"` into a number and check the result.
// 5. Check whether `"JavaScript"` is NaN using `isNaN()`.
let price = 459.6789;
console.log(price.toFixed(2));
console.log(Number.isInteger(price));
console.log(Number("250"));
console.log(Number("Hello123"));
console.log(isNaN("JavaScript"));

// Question 2: parseInt and parseFloat

// Given the following values:

let a = "123.456";
let b = "89.75";
let c = 45.987;

// Predict and print the output of:

// 1. `parseInt(a)`
// 2. `parseFloat(a)`
// 3. `parseInt(b)`
// 4. `parseFloat(b)`
// 5. `Number(c)`
// 6. `c.toFixed(2)`
console.log(parseInt(a));
console.log(parseFloat(a));
console.log(parseInt(b));
console.log(parseFloat(b));
console.log(Number(c));
console.log(c.toFixed(2));
// Also explain the difference between `parseInt()` and `parseFloat()`.
// parseInt() converts a string into an integer by removing the decimal part.
// parseFloat() converts a string into a decimal number, keeping the decimal part.


// Question 3: Math Methods

// Write a JavaScript program using the following numbers:

let num1 = 25.7;
let num2 = -49;
let num3 = 16;


// Perform these operations:

// 1. Round `num1` using `Math.round()`.
// 2. Round `num1` upward using `Math.ceil()`.
// 3. Round `num1` downward using `Math.floor()`.
// 4. Find the square root of `num3`.
// 5. Find the absolute value of `num2`.
// 6. Calculate `5` raised to the power of `3` using `Math.pow()`.

console.log(Math.round(num1));  
console.log(Math.ceil(num1));
console.log(Math.floor(num1));
console.log(Math.sqrt(num3));
console.log(Math.abs(num2));
console.log(Math.pow(5, 3));

// Question 4: Min, Max and Random Numbers

// Complete the following tasks:

// 1. Find the smallest number from `45, 12, 89, 3, 67` using `Math.min()`.
// 2. Find the largest number from the same values using `Math.max()`.
// 3. Generate a random number between `1` and `10`.
// 4. Generate a random number between `50` and `100`.
// 5. Generate a random integer between `1` and `31`.

// Condition: Random numbers must be integers, not decimal values.

console.log(Math.min(45, 12, 89, 3, 67));
console.log(Math.max(45, 12, 89, 3, 67));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 31) + 1);
// Question 5: Math Challenge

// Create a program to perform the following tasks:

// 1. Store your circle's radius in a variable.
// 2. Calculate the area of the circle using `Math.PI`.
// 3. Display the area rounded to 2 decimal places using `toFixed()`.
// 4. Calculate the square of the radius using `Math.pow()`.
// 5. Print the value of `Math.E` using `console.log()`.

// Formula:

// \\[ Area = \pi \times radius^2 \\]
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log(area.toFixed(2));
console.log(Math.pow(radius, 2));
console.log(Math.E);
