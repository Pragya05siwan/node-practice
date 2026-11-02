// ## Question 1: Arithmetic Operators

// Create two variables, `a = 15` and `b = 4`.

// Write a program to calculate and print:

// - Addition
// - Subtraction
// - Multiplication
// - Division
// - Modulus (remainder)
// - Exponentiation (`a` raised to the power of `b`)

let a = 15;
let b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// ## Question 2: Increment and Decrement

// Predict the output of the following code before running it.

// ```
// let x = 5;

// console.log(x++);
// console.log(x);
// console.log(++x);
// console.log(x--);
// console.log(--x);
// ```

// Explain the difference between pre-increment (`++x`) and post-increment (`x++`). Also explain pre-decrement and post-decrement.
let x = 5;
console.log(x++); // 5 (post-increment: returns the value before incrementing)
console.log(x); // 6
console.log(++x); // 7 (pre-increment: increments first, then returns the value)
console.log(x--);   // 7 (post-decrement: returns the value before decrementing)
console.log(--x); // 5 (pre-decrement: decrements first, then returns the value)  

// Difference between pre and post operators:
// - Post-increment (x++): Uses the current value first, then increases it by 1.
// - Pre-increment (++x): Increases the value by 1 first, then uses the updated value.
// - Post-decrement (x--): Uses the current value first, then decreases it by 1.
// - Pre-decrement (--x): Decreases the value by 1 first, then uses the updated value.



// ## Question 3: Assignment Operators

// Create a variable `num = 20` and perform these operations one by one, printing the value after each operation.

// 1. Add `10` using `+=`.
// 2. Multiply the result by `2` using `*=`.
// 3. Subtract `15` using `-=`.
// 4. Divide the result by `5` using `/=`.
// 5. Find the remainder after dividing by `3` using `%=`.

// Challenge: Predict the final value without running the code.

num = 20;
num +=10; // num = 30
console.log(num); // 30 
num *= 2; // num = 60
console.log(num); // 60
num -= 15; // num = 45
console.log(num);   
num /= 5; // num = 9
console.log(num);   
num %= 3; // num = 0
console.log(num); // 0

// ## Question 4: Equality Operators

// Predict whether each statement returns `true` or `false`. Then verify your answers using `console.log()`.

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


// Explain the difference between `==` and `===`, and between `!=` and `!==`.

// Difference between == and ===
//  == (loose equality): Compares values after possible type conversion.
//  === (strict equality): Compares both value and data type without converting the types.
// Difference between != and !==
//  != (loose inequality): Checks whether values are unequal after possible type conversion.
//  !== (strict inequality): Checks whether values or their data types are different.

// ## Question 5: Comparison Operators Challenge

// Write a JavaScript program to predict and print the output of these comparisons.


console.log(12 > 8); //true
console.log(7 < 3); //false
console.log(10 >= 10); //true
console.log(15 <= 12); //false
console.log(8 != 9); //true
console.log(6 === 6); //true
console.log("20" > 5); //true
console.log("10" < "2"); //true

// Identify which statements return `true` and which return `false`. Explain why the last comparison gives its result.

// When both operands are strings, JavaScript compares them character by character rather than treating them as numbers.
// First character of "10" is "1".
// First character of "2" is "2".
// Because "1" comes before "2", "10" is considered smaller than "2".
// Therefore:
// console.log("10" < "2");  // true
// console.log(10 < 2);      // false
