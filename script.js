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

// Define the function to generate password.
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

    // Only accepts input which is number, and between 8 to 128 only.
    // Changed to 4 characters to check edge cases, space in front or end of password.
    var invalidInput = (isNaN(passwordLength) || passwordLength < 4 || passwordLength > 128);

    if (invalidInput) {
      // Alert error message due to invalid input or password length invalid.
      window.alert("Invalid input! Enter password length numbers only and between 8 to 128.");
      // Calling the function again if invalid input, until valid input is received.
      // return in front of calling self again, otherwise return value will be undefined.
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

    // Check and alert error message if none of the character type is selected.
    if ((hasLowerCase + hasUpperCase + hasNumeric + hasSpecialChar) == 0) {
      window.confirm("Selection error! Please select at least 1 character types.");
      return getCharType();
    } else {
      // Return the validated characters types.
      return [hasLowerCase, hasUpperCase, hasNumeric, hasSpecialChar];
    }
  }

  // Function to generate password, password length and characters type as parameters.
  var genPassword = function(passwordLength = getLengthInput(), charType = getCharType()) {
    
    // Array position 0 stores boolean value whether that character Type is selected,
    // Array poaistion 1 stores actual characters.  
    var lowerCase = [charType[0], "abcdefghijklmnopqrstuvwxyz"];

    var upperCase = [charType[1], "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    var numeric = [charType[2], "0123456789"];

    // var specialChar = [charType[3], " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
    // Changed special characters to space only to verify added password check function.
    var specialChar = [charType[3], " "];

    var passwordSelection = "";

    // Concatinate character types to passwordSelection, based on user selection.
    if (lowerCase[0]) {
      passwordSelection += lowerCase[1];
    }

    if (upperCase[0]) {
      passwordSelection += upperCase[1];
    }

    if (numeric[0]) {
      passwordSelection += numeric[1];
    }

    if (specialChar[0]) {
      passwordSelection += specialChar[1];
    }
    console.log(passwordSelection);

    var concatinatePassword = function () {
      var pass = "";
      // Loop to generate and concatinate to password string.
      for (var i=0; i<passwordLength; i++) {
        pass += passwordSelection.charAt(Math.floor(Math.random() * passwordSelection.length)); 
      }
      console.log("NEW password: " + password);
      return pass;
    }

    var password = concatinatePassword();

    // Function to check password validation, takes in two parameters.
    // needToCheck is a boolean value, which is whether the character type has been selected.
    // charToCheck is the string value of the characters
    var validatePassword = function (needToCheck, charToCheck) {
      console.log(charToCheck);
      var passwordIsValid = false;
      if (needToCheck) {
        // Loop through each string of password to check whether selected character type is generated at least once.
        for (var i=0; i<charToCheck.length; i++) {
          console.log("length is : " + charToCheck.length);
          console.log("Checking : " + charToCheck.charAt(i));
          if (password.includes(charToCheck.charAt(i))) {
            console.log("Match fund! : " + charToCheck.charAt(i));
            console.log(charToCheck.charAt(i) + "is In Password: " + password + "  Interation " + i );
            // Found a selected character type in password, return true and exit this function call.
            return true;
          }
        }
        // Checked through password, if the selected character type not included, generate password again.
        if (passwordIsValid === false) {
          console.log("false detected");
          // Generate a new password by calling the concatinatePassword function.
          password = concatinatePassword();
          validatePassword(needToCheck, charToCheck);
        }
      }
      else {
        return true;
      }
    }

    // Function to check whether space is in the front or end of the password.
    // Edge cases to implement a solution, what if space is part of the password and it's either in front of end of the password, users will not be able to tell, best to eliminate this edge cases, even tho chances are slim.
    var checkSpaces = function () {
      var firstCharIsSpace = false;
      var lastCharIsSpace = false;
      if (password.charAt(0) === " ") {
        firstCharIsSpace = true;
        password += " PLEASE NOTE, FIRST LETTER OF THE GENERATED PASSWORD IS A SPACE, WHICH COULD NOT BE DISPLAYED."
        console.log("first char is space!!!");
      }
      if (password.charAt(password.length - 1) === " ") {
        lastCharIsSpace = true;
        password += " PLEASE NOTE, LAST LETTER OF THE GENERATED PASSWORD IS A SPACE, WHICH COULD NOT BE DISPLAYED."
        console.log("last char is space!!!");
      }

      if ( (firstCharIsSpace !== true) && (lastCharIsSpace !== true) ) {
        return true;
      }
      else {
        return false;
      }
    }

    var lowerCaseChecked = false;
    var upperCaseChecked = false;
    var numericChecked = false;
    var specialCharChecked = false;
    var spacesChecked = false;

    // Call validate password function until a valid password with at least 1 of selected character types each is generated and validated. As well as space not at the front or in the end.
    // while ((lowerCaseChecked && upperCaseChecked && numericChecked && specialCharChecked && spacesChecked) !== true ) {
    while ((lowerCaseChecked && upperCaseChecked && numericChecked && specialCharChecked) !== true ) {
      spacesChecked = checkSpaces();
      numericChecked = validatePassword(numeric[0], numeric[1]);
      lowerCaseChecked = validatePassword(lowerCase[0], lowerCase[1]);
      upperCaseChecked = validatePassword(upperCase[0], upperCase[1]);
      specialCharChecked = validatePassword(specialChar[0], specialChar[1]);
    }

    console.log("Password is " + password);
    return password;
  }

  var password = genPassword();

  // lesson learnt, calling a function without passing a parameters when its expected, the parameters will become undefined!!
  return password;
}





