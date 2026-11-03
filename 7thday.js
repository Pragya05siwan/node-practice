// Question 1: Check Positive, Negative or Zero

// Create a variable named `number` and assign any number to it.

// Using `if`, `else if`, and `else`, check:

// - If the number is greater than 0, print `"Positive Number"`.
// - If the number is less than 0, print `"Negative Number"`.
// - If the number is equal to 0, print `"Zero"`.

let number = -10;

if (number > 0) {
    console.log("Positive Number");
}
else if (number < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}







// Question 2: Student Marks and Result

// Create a variable named `marks` and assign a value between 0 and 100.

// Using `if-else-if`, check the student's grade:

// - Marks 75 or above → `"Grade A"`
// - Marks 60 or above → `"Grade B"`
// - Marks 45 or above → `"Grade C"`
// - Marks 35 or above → `"Grade D"`
// - Below 35 → `"Failed"`

// Challenge: If marks are below 0 or above 100, print `"Invalid Marks"`.
let marks = 85;

if (marks < 0 || marks > 100) {
    console.log("Invalid Marks");
}
else if (marks >= 75) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else if (marks >= 45) {
    console.log("Grade C");
}
else if (marks >= 35) {
    console.log("Grade D");
}
else {
    console.log("Failed");
}



// Question 3: Age and Gender Using Nested If-Else

// Create two variables:

// ```
// let age = 20;
// let gender = "male";
// ```

// Using nested `if-else`, check:

// - If age is 18 or above:
//   - If gender is `"male"`, print `"Adult Male"`.
//   - Otherwise, print `"Adult Female"`.
// - If age is below 18:
//   - If gender is `"male"`, print `"Boy"`.
//   - Otherwise, print `"Girl"`.

// Try changing the age and gender values to test different conditions.

let age = 20;
let gender = "male";

if (age >= 18) {
    if (gender == "male") {
        console.log("Adult Male");
    }
    else {
        console.log("Adult Female");
    }
}
else {
    if (gender == "male") {
        console.log("Boy");
    }
    else {
        console.log("Girl");
    }
}



// Question 4: Simple Calculator Using Switch

// Create two variables and one operator variable.

// ```
// let num1 = 20;
// let num2 = 10;
// let operator = "+";
// ```

// Using a `switch` statement, perform the following operations:

// - `+` → Addition
// - `-` → Subtraction
// - `*` → Multiplication
// - `/` → Division
// - `%` → Modulus

// Print the calculated result.

// If the operator is invalid, print `"Invalid Operator"`.

// Note: Use `break` after each case.
let num1 = 20;
let num2 = 10;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    case "%":
        console.log(num1 % num2);
        break;

    default:
        console.log("Invalid Operator");
}


// Question 5: Loop with Break and Continue

// Write a `for` loop that prints numbers from 1 to 10.

// Perform these tasks:

// 1. Use `continue` to skip number 5.
// 2. Use `break` to stop the loop when the number reaches 8.
// 3. Print all the numbers that are not skipped and appear before the loop stops.

// Challenge: Predict the output before running the code.
for (let i = 1; i <= 10; i++) {

    if (i == 5) {
        continue;
    }

    if (i == 8) {
        break;
    }

    console.log(i);
}