// // NOTE

// /*
// readline is a JS object (rl)
// */

// // Step 1: include the readline module

// const readline = require("readline");

// // Step 2: Create an instance of readline.interface

// const rl = readline.Interface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Step 3: prompt the user for their name
// rl.question("What is your name? ", (name) => {
//   // Step 4: Display greeting
//   console.log(`Hello, ${name}!`);
//   //Step 5: close the readline interface
//   rl.close();
// });

const readline = require("readline");

// Create an interface for the input and output

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to generate a random number between min and max (including the max and min number)
function getRandomInt(min, max) {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The secret number to guess between 1 and 100
const secretNumber = getRandomInt(1, 100);

//counter for number of attempts
let attempts = 0;

console.log(
  "Guess a number! It's between 1 and 100. You have unlimited attempts."
);

function guessNumber() {
  rl.question("Enter your guess: ", (answer) => {
    attempts += 1; // increment the number of attempts
    const guess = parseInt(answer, 10); // Converting the input string to number
    // Check if the guess is correct, too high, or too low
    if (guess == secretNumber) {
      console.log(
        `Correct! The number was ${secretNumber}! It took you ${attempts} attempts.`
      );
      rl.close();
    } else if (guess < secretNumber) {
      console.log("Too low!");
      guessNumber();
    } else if (guess > secretNumber) {
      console.log("Too high!");
      guessNumber();
    } else {
      console.log("Please enter a valid number.");
      guessNumber();
    }
  });
}

guessNumber();
