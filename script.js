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

var generatePassword = function() {

  // Description of criteria, using string literals from ES6.
  var programDesc = `
          Password Generator:

    Length between 8 to 128 characters only.

    4 character types to choose from:
        lowercase, uppercase, numeric and/or special characters.

    At least one character type should be selected.

    Simply follow the prompt and generate a secure password!
  `
  // Prompt to explain the program.
  window.alert(programDesc);

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
      // Alert error message due to invalid input or password length invalid.
      window.alert("Invalid input! Enter password length numbers only and between 8 to 128.");
      // Calling the function again if invalid input, until valid input is received.
      return getLengthInput();
    } else {
      window.alert("The password length is: " + passwordLength);
      return passwordLength;
    }
  }

  var getCharType = function() {
    // Gather user input and assign whether or not to include lowercase , uppercase, numeric, special characters to individual boolean variable.
    hasLowerCase = window.confirm("Include lowercase characters in the password?");
    hasUpperCase = window.confirm("Include uppercase characters in the password?");
    hasNumeric = window.confirm("Include numeric characters in the password?");
    hasSpecialChar = window.confirm("Include special characters in the password?");

    var validateCharTypeInput = function() { 
      // Check and alert error message if none of the character type is selected.
      if ((hasLowerCase + hasUpperCase + hasNumeric + hasSpecialChar) == 0) {
        window.confirm("Selection error! Please select at least 1 character types.");
        return getCharType();
      } else {
        return [hasLowerCase, hasUpperCase, hasNumeric, hasSpecialChar];
      }
    }

    return validateCharTypeInput();
  }

  // Defines a function to validate at least 1 character type is chosen.

  // Function to generate password, password length and characters type as parameters.
  var genPassword = function(passwordLength = getLengthInput(), charType = getCharType()) {
    
    // Using string to store character types
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var numeric = "0123456789";

    var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var password = "";
    var passwordSelection = "";
    
    // Define variables to store each characters types selection for clarify.
    var hasLowerCase = charType[0];
    var hasUpperCase = charType[1];
    var hasNumeric = charType[2];
    var hasSpecialChar = charType[3];

    // Concatinate character types to passwordSelection, based on user selection.
    if (hasLowerCase) {
      passwordSelection += lowerCase;
    }

    if (hasUpperCase) {
      passwordSelection += upperCase;
    }

    if (hasNumeric) {
      passwordSelection += numeric;
    }

    if (hasSpecialChar) {
      passwordSelection += specialChar;
    }

    // Loop to generate and concatinate to password string.
    for (i=0; i<passwordLength; i++) {
      password += passwordSelection.charAt(Math.floor(Math.random() * passwordSelection.length)); 
    }
    return password;
  }

  var password = genPassword();
  // lesson learnt, calling a function without passing a parameters when its expected, the parameters will become undefined!!
  return password;
}

// Password validation:
  // 1. check whether the user criteria is met (such as if uppercase is chosen, need to have at least 1 uppercase character in the password)

  // 2. other checks? Edge cases to minimize error.



