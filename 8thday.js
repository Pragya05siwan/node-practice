// Question 1: Print Numbers Using While Loop

// Write a JavaScript program using a `while` loop to:

// 1. Print numbers from 1 to 20.
// 2. Print all even numbers between 1 and 20.
// 3. Print all odd numbers between 1 and 20.
// 4. Print numbers from 20 to 1 in reverse order.

// Condition: Use only a `while` loop.

//print numbers from 1 to 20
// let i = 1;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }

// //print all even numbers between 1 and 20
// let j = 2;
// while (j <=20) {
//     console.log(j);
//     j +=2;
// }

// //print all odd numbers between 1 and 20
// let y = 1;
// while (y <=20) {
//     console.log(y);
//     y +=2;
// }

// //print numbers from 20 to 1 in reverse order
// let k = 20;
// while (k >=1) {
//     console.log(k);
//     k--;
// }


// Question 2: Palindrome Number

// Write a JavaScript program to check whether a given number is a palindrome or not using a `while` loop.

// Examples:

// - `121` → Palindrome
// - `1331` → Palindrome
// - `123` → Not Palindrome
// - `12321` → Palindrome

// Hint: Reverse the number and compare it with the original number.
// let num = 121;
// let n = num;
// let reversed = 0;
// while (n > 0) {
//     let digit = n % 10;
//     reversed = reversed * 10 + digit;
//     n = Math.floor(n / 10);
// }

//     if (num === reversed ) {
//         console.log(num + " is a Palindrome");
//     } else {    
//         console.log(num + " is Not a Palindrome");  
//     }

// let p = 123;
// let m = p;
// let reverse = 0;
// while (m > 0) {
//     let digit = m % 10;
//     reverse = reverse * 10 + digit;
//     m = Math.floor(m / 10);
// }
//       if (p === reverse ) {
//         console.log(p + " is a Palindrome");
//     } else {    
//         console.log(p + " is Not a Palindrome");  
//     }


// Question 3: Sum of Digits

// Write a JavaScript program using a `while` loop to calculate the sum of all digits of a given number.

// Examples:

// - `1234` → `10` (1 + 2 + 3 + 4)
// - `567` → `18` (5 + 6 + 7)
// - `908` → `17` (9 + 0 + 8)

// Hint: Use `%` to extract the last digit and remove it from the original number.

// let z = 1234;
// let sum = 0;

// while (z > 0) {
//     let digit =  z % 10;
//     sum = sum + digit;
//     z = Math.floor(z / 10);
// }

// console.log("Sum of digits:", sum);

// let q = 567;
// let total = 0;
// while (q > 0) {
//     let digit = q % 10;
//     total = total + digit;
//     q = Math.floor(q / 10);
// }
// console.log("Sum of digits:", total);

// let r = 908;
// let totalSum = 0;
// while (r > 0) {
//     let digit = r % 10;
//     totalSum = totalSum + digit;    
//     r = Math.floor(r / 10);
// }
// console.log("Sum of digits:", totalSum);


// Question 4: Do-While Loop

// Write a JavaScript program using a `do-while` loop to:

// 1. Print numbers from 1 to 15.
// 2. Print numbers from 15 to 1 in reverse order.
// 3. Print the multiplication table of 5 (5 × 1 to 5 × 10).

// Condition: Use a `do-while` loop for all three tasks.

// 1. Print numbers from 1 to 15
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 15);


// // 2. Print numbers from 15 to 1
// let j = 15;

// do {
//     console.log(j);
//     j--;
// } while (j >= 1);


// // 3. Multiplication table of 5
// let k = 1;

// do {
//     console.log("5 x " + k + " = " + (5 * k));
//     k++;
// } while (k <= 10);

// Question 5: For Loop Challenge

// Write a JavaScript program using a `for` loop to:

// 1. Print the multiplication table of any number.
// 2. Calculate the sum of numbers from 1 to 100.
// 3. Print all numbers between 1 and 50 that are divisible by 5.

// Challenge: Print the multiplication table in reverse order, from 10 down to 1.

// 1. Multiplication table of any number
let num = 18;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


// 2. Sum of numbers from 1 to 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);


// 3. Numbers divisible by 5 between 1 and 50
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


// 4. Multiplication table in reverse order
let n = 18;

for (let i = 10; i >= 1; i--) {
    console.log(n + " x " + i + " = " + (n * i));
}