// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Pseudocode as comment
// Prompt to explain the program

// Series of prompts for userinput

// Validate input (not less than 8 or bigger than 128) and then store userinput 

// Alert error message if password length invalid

// Assign char length to a numeric variable

// Gather user input and assign whether or not to include lowercase , uppercase, numeric, special characters to individual boolean variable. 

// Alert error message if none of the character type is selected.

// 4 x strings to store password characters: lowercase, uppercase, numeric & special characters

// define a loop to generate password and store in a string

// display password to user interface

// 3 options to choose after password successfully generate Password
//   option 1: generate a new password based on same criteria
//   option 2: give new set of criteria to generate a new password
//   option 3: exit the program 




