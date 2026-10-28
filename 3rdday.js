// ## Question 1: Check the Data Type

// Write a JavaScript program using `typeof` to check the data type of each value below.

// ```
// console.log(typeof "Hello");
// console.log(typeof 100);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof undefined);
// console.log(typeof function() {});
// ```

// Task: Predict the output of every statement before running the code.

// console.log(typeof "Hello");  //string
// console.log(typeof 100);  //number
// console.log(typeof true); //boolean
// console.log(typeof null); //object
// console.log(typeof []); //object
// console.log(typeof {}); //object
// console.log(typeof undefined); //undefined
// console.log(typeof function() {}); //function

// ## Question 2: Explicit Type Conversion

// Create the following variables and convert them into the requested data types.

// - Convert `"150"` from a string to a number.
// - Convert `250` from a number to a string.
// - Convert `"JavaScript"` into a boolean.
// - Convert `0` into a boolean.
// - Print each converted value and its data type using `console.log()` and `typeof`.

// let num = Number("150");
// console.log(num);
// console.log(typeof num);

// let str = String(250);
// console.log(str);
// console.log(typeof str);

// let bool1 = Boolean("JavaScript");
// console.log(bool1);
// console.log(typeof bool1);

// let bool2 = Boolean(0);
// console.log(bool2);
// console.log(typeof bool2);


// ## Question 3: Predict the Output

// Without running the code, predict the output of each statement. Then run the code and verify your answers.

// console.log("10" + 5); //105
// console.log("10" - 5); //5
// console.log("4" * 3); //12
// console.log("20" / 4); //5
// console.log(true + 5); //6
// console.log(false + 10); //10
// console.log(null + 5); //5
// console.log(undefined + 5); //Nan 

// ## Question 4: String and Empty Value Conversion

// Predict the output of the following statements and explain what happens in each case.

// console.log("" + 10); //"10""
// console.log("" - 10); //-10
// console.log("Hello" + 20); //"Hello20"
// console.log("Hello" * 2); //NaN
// console.log("5" + "10"); //"510"
// console.log("5" - "10"); //"-5"
// console.log([] + []); //""
// console.log([] * 5); //NaN

// ## Question 5: Mixed Type Conversion Challenge

// Write a JavaScript program to predict and explain the output of all the following statements.console.log(true + 1);
console.log(false * 10); //0
console.log(null + 10); //10
console.log(undefined * 2); //Nan
console.log("false" + 5); //"false5"
console.log("false" * 5); //NaN
console.log({} + []); //"[object Object]"
console.log({} * []); //NaN
// Task: Identify which operations produce a number, a string, or `NaN` (Not a Number). Check your predictions by running the code.

