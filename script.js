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

//define variables.
// var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// var numeric = ["0","1","2","3","4","5","6","7","8","9"];

// var specialChar = ["","","","","","","","","","","","","",""]



// Prompt to explain the program.
var generatePassword = function() {

  // Using string instead.
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var numeric = "0123456789";

  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // Description of criteria, using string literals from ES6.
  var programDesc = `
          Password Generator:

    Length between 8 to 128 characters only.

    4 character types to choose from:
        lowercase, uppercase, numeric and/or special characters.

    At least one character type should be selected.

    Simply follow the prompt and generate a secure password!
  `
  window.alert(programDesc);

  var mainFunction = function() {
    //(parseInt(passLength.replace(/\s+/g, ""), 10) a better practise.
    // alert(typeof(Number(passLength)));
    
    // passLength === NaN or passLength == NaN will return false, isNan() is the proper way to validate NaN.
    // Validate input (not less than 8 or bigger than 128) and then store userinput .
    var getLengthInput = function() {
      // Only ask for input when empty.
      var lengthInput = window.prompt("Enter password length(numbers only):");
      
      // Convert user input to be a number variable to validate input.
      // non numbers input will be converted to NaN.
      passwordLength = Number(lengthInput);

      if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        window.alert("Invalid input! Enter password length numbers only and between 8 to 128.");
        // lengthInput = window.prompt("Invalid input!\n\nEnter password length(numbers only!):");
        // Calling the function again if invalid input, until valid input is received.
        return getLengthInput();
      } else {
        window.alert("The password length is: " + passwordLength);
        return passwordLength;
      }
    }

    var getCharType = function() {
      hasLowerCase = window.confirm("Include lowercase characters in the password?");
      hasUpperCase = window.confirm("Include uppercase characters in the password?");
      hasNumeric = window.confirm("Include numeric characters in the password?");
      hasSpecialChar = window.confirm("Include special characters in the password?");

      var validateCharTypeInput = function() {
        if ((hasLowerCase + hasUpperCase + hasNumeric + hasSpecialChar) == 0) {
          window.confirm("Selection error! Please select at least 1 character types.");
          return getCharType();
        } else {
          window.alert("no error");
          console.log(hasLowerCase);
          console.log(hasUpperCase);
          console.log(hasNumeric);
          console.log(hasSpecialChar);
          // return {
          //   hasLowerCase: hasLowerCase,
          //   hasUpperCase: hasUpperCase,
          //   hasNumeric: hasNumeric,
          //   hasSpecialChar: hasSpecialChar
          // };
          return [hasLowerCase, hasUpperCase, hasNumeric, hasSpecialChar];
        }
      }

      validateCharTypeInput();
    }

    // Defines a function to validate at least 1 character type is chosen.
    
    var testLengthFunc = getLengthInput();
    // var testCharInputArray = getCharType();

    // var testL = {
    //   a: getCharType.hasLowerCase,
    //   b: getCharType.hasUpperCase 
    // };

    // var {a, b, c, d} = getCharType();

    // var [a, b, c, d] = getCharType();

    var a = getCharType[0];

    console.log("variable: " + testLengthFunc);
  
    // console.log("array: " + testL.a + testL.b);

    // console.log(a + b + c + d);
    console.log(a);

    // var genPassword = function(passwordLength, ) {

    // }


    getLengthInput();
    getCharType();
    // // lesson learnt, calling a function without passing a parameters when its expected, the parameters will become undefined!!
    // validateCharTypeInput(hasLowerCase, hasUpperCase, hasNumeric, hasSpecialChar);
    mainFunction();
  }

  mainFunction();
}



// Validate input (not less than 8 or bigger than 128) and then store userinput .

// Alert error message if password length invalid.

// Assign char length to a numeric variable.

// Gather user input and assign whether or not to include lowercase , uppercase, numeric, special characters to individual boolean variable. 

// Alert error message if none of the character type is selected.

// 4 x strings to store password characters: lowercase, uppercase, numeric & special characters.

// define a loop to generate password and store in a string.

// display password to user interface.

// 3 options to choose after password successfully generate Password:
//   option 1: generate a new password based on same criteria
//   option 2: give new set of criteria to generate a new password
//   option 3: exit the program 

// Password validation:
  // 1. check whether the user criteria is met (such as if uppercase is chosen, need to have at least 1 uppercase character in the password)

  // 2. other checks? Edge cases to minimize error.



