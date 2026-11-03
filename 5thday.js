// ## Question 1: Template Literals

// Create three variables:

// - `name` — your name
// - `age` — your age
// - `course` — `"JavaScript"`

// Using a template literal (backticks), print this type of message by inserting the variable values:

// `Hello, my name is Amit. I am 22 years old and I am learning JavaScript.`

// Replace the example details with your own variable values.

let name = "pragya";
let age = 22;
let course = "javascript";

console.log(`Hello, my name is ${name}. I am ${age} years old and I am learning ${course}.`);

// ## Question 2: String Methods

// Consider this string:

// ```
// let str = "  Welcome to JavaScript  ";
// ```

// Use string methods to perform these tasks:

// 1. Print the length of the string.
// 2. Convert it to uppercase.
// 3. Convert it to lowercase.
// 4. Check whether it includes `"JavaScript"`.
// 5. Remove the extra spaces from the beginning and end.
// 6. Check whether the original string starts with `"Welcome"`.

// // Print the result of every operation.
let str = " Welcome to JavaSript";
console.log(str.length); // 24
console.log(str.toUpperCase()); // WELCOME TO JAVASCRIPT
console.log(str.toLowerCase()); // welcome to javascript
console.log(str.includes("JavaScript")); // false 
console.log(str.trim()); // Welcome to JavaScript
console.log(str.startsWith("Welcome")); // true

// // ## Question 3: Slice, Substring, and Character Access

// // Given the following string:

// // ```
// // let language = "JavaScript";
// ```

// // Write code to:

// // 1. Print the first four characters.
// // 2. Print the last three characters using a negative index with `slice()`.
// // 3. Print the character at index `4` using `charAt()`.
// // 4. Print the substring from index `0` to index `4` using `substring()`.
// // 5. Print the character at index `6` using bracket notation (`[]`).

let Language = "JavaScript";
console.log(Language.slice(0, 4)); // Java
console.log(Language.slice(-3)); //ipt
console.log(Language.charAt(4)); // S
console.log(Language.substring(0, 4)); // Java
console.log(Language[6]); // c

// ## Question 4: Search and Replace

// Consider this string:

// ```
// let sentence = "I love learning JavaScript";
// ```

// Use string methods to:

// 1. Find the index of `"learning"`.
// 2. Check whether the sentence includes `"Python"`.
// 3. Check whether the sentence ends with `"JavaScript"`.
// 4. Replace `"JavaScript"` with `"React"`.
// 5. Repeat the original sentence two times.

// Print all the results and check whether the original string changes after using `replace()`.

let sentence = "I love learning JavaScript";
console.log(sentence.indexOf("learning")); // 7
console.log(sentence.includes("Python"));   // false
console.log(sentence.endsWith("JavaScript")); // true
console.log(sentence.replace("JavaScript", "React")); // I love learning React

// ## Question 5: Split and String Challenge

// You are given this variable:

// ```
// let fullName = "Pragya Sharma Patil";
// ```

// Complete the following tasks:

// 1. Split the full name into an array of words.
// 2. Print only the first name.
// 3. Print only the middle name.
// 4. Print only the last name.
// 5. Using a template literal, print a greeting such as `Hello, Pragya!`.

// Challenge: Try the same program with a different full name containing three words, without changing the logic.
let fullName = "Pragya Sharma Patil";
sentence = fullName.split(" ");
console.log(sentence); // ["Pragya", "Sharma", "Patil"]
console.log(sentence[0]); // Pragya
console.log(sentence[1]); // Sharma
console.log(sentence[2]);   // Patil        
console.log(`Hello, ${sentence[0]}!`); // Hello, Pragya!    
