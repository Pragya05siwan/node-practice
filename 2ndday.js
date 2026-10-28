// ## Question 1: Variable Declaration

// Declare three variables using `var`, `let`, and `const`, respectively.

// - Store your name in the first variable.
// - Store your age in the second variable.
// - Store your favourite number in the third variable.
// - Try to reassign a new value to each variable and observe what happens.
// var name = "Pragya";
// let age = 23;
// const favNumber = 22;

// console.log(name);
// console.log(age);
// console.log(favNumber);


// name = "bodhi";
// age = 24;

// console.log(name);
// console.log(age);

// favNumber = 10;
// //we can't reassign a value to a constant variable, so this will throw an error.
// console.log(favNumber);

// ## Question 2: Re-declaration

// Write a program using `var` and `let`.

// - Declare a variable named `marks` using `var` and assign it `75`.
// - Declare `marks` again using `var` and assign it `90`.
// - Print the value of `marks`.
// - Now try declaring a variable named `score` twice using `let`. Observe the result.
// var marks = 75;
// var marks = 90;

// console.log(marks);

// let score = 80;
// let score = 95;
// console.log(score);

// ## Question 3: Variable Naming Rules

// Identify which variable names are valid and which are invalid in JavaScript. Write your answers in comments and explain why.

// ```
// let studentName = "Amit";
// let 2marks = 85;
// let _price = 100;
// let $total = 500;
// let user-age = 20;
// let const = 10;
// ```
// let studentName = "Amit";  // Valid: letters are allowed.
// let 2marks = 85;           // Invalid: a variable cannot start with a number.
// let _price = 100;          // Valid: underscore is allowed.
// let $total = 500;          // Valid: dollar sign is allowed.
// let user-age = 20;         // Invalid: hyphen is not allowed in variable names.
// let const = 10;            // Invalid: const is a reserved keyword.

// ## Question 4: Data Types

// Create one variable for each of the following data types and print each variable using `console.log()`.

// - String
// - Number
// - Boolean
// - Null
// - Undefined
// - BigInt
// - Symbol
// let name = "Pragya";              // String
// let age = 23;                     // Number
// let isStudent = true;             // Boolean
// let result = null;                // Null
// let address;                      // Undefined
// let bigNumber = 123456789012345n;  // BigInt
// let uniqueId = Symbol("id");      // Symbol

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(result);
// console.log(address);
// console.log(bigNumber);
// console.log(uniqueId);

// ## Question 5: Equality and Symbol

// Predict the output of the following code before running it. Then execute the program and check your answers.


let a = 50;    
let b = 50;    

let id1 = Symbol(100);  // id1 == id2 → false                 
let id2 = Symbol(100);   // Each Symbol() creates a unique value, even if both have the same description (100).

console.log(a == b);       // a == b → true 
console.log(id1 == id2);  //Both variables contain the same number, 50, so they are equal.

let x = "JavaScript";   //x == y→ `true 
let y = "JavaScript";    //Both variables contain the same string, "JavaScript", so they are equal.

console.log(x == y);

