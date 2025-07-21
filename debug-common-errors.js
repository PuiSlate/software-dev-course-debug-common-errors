/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp

// What’s Wrong?
//Syntax error: missing closing qoutation, an exclamation mark or full stop, closing parethesis and a semi colon.
//Debugging method: reading error messages
//The correct code shoule be:
console.log("Welcome to the bootcamp."); 

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong?
//Runtime error: "eight" is string, when it's multiplied by two the result is NaN
//Debugging method: consol.log()
//We can either change the array to be all number or skip the non-numeric value as per below;
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'number') {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Skipping non-numeric value: ${numbers[i]}`);
  }
}


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?
//logic error in the for loop. When num % i === 0 is true, it means num is divisible by i,
//(meaning it has a factor other than 1 and itself), and therefore is not a prime number.
//However, the function returns 'true' which is falsely indicating that num is prime.
//Here's the correct version.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // It's divisible by i, so it's not prime
    }
  }
  return true; // No divisors found, it's prime
}

console.log(isPrime(7));  // true