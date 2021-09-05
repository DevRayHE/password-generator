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

    if (isNaN(passwordLength) || passwordLength < 4 || passwordLength > 128) {
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

    // var validateCharTypeInput = function() { 
    //   // Check and alert error message if none of the character type is selected.
    //   if ((hasLowerCase + hasUpperCase + hasNumeric + hasSpecialChar) == 0) {
    //     window.confirm("Selection error! Please select at least 1 character types.");
    //     return getCharType();
    //   } else {
    //     return [hasLowerCase, hasUpperCase, hasNumeric, hasSpecialChar];
    //   }
    // }

    // Check and alert error message if none of the character type is selected.
    if ((hasLowerCase + hasUpperCase + hasNumeric + hasSpecialChar) == 0) {
      window.confirm("Selection error! Please select at least 1 character types.");
      return getCharType();
    } else {
      // Return the validated characters types.
      return [hasLowerCase, hasUpperCase, hasNumeric, hasSpecialChar];
    }

    // return validateCharTypeInput();
  }

  // Defines a function to validate at least 1 character type is chosen.

  // Function to generate password, password length and characters type as parameters.
  var genPassword = function(passwordLength = getLengthInput(), charType = getCharType()) {
    
    // Array position 0 stores boolean value whether that character Type is selected,
    // Array poaistion 1 stores actual characters.  
    var lowerCase = [charType[0], "abcdefghijklmnopqrstuvwxyz"];
    console.log(lowerCase[0], + "...." + lowerCase[1]);

    var upperCase = [charType[1], "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    var numeric = [charType[2], "0123456789"];

    var specialChar = [charType[3], " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

    var passwordSelection = "";
    
    console.log("PL: " + passwordLength, "\n charAt: " + charType);

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

    var concatinatePassword = function () {
      var pass = "";
      // Loop to generate and concatinate to password string.
      for (var i=0; i<passwordLength; i++) {
        pass += passwordSelection.charAt(Math.floor(Math.random() * passwordSelection.length)); 
      }
      return pass;
    }

    var password = concatinatePassword();
    console.log("p: " + password);

    // Function to check password validation, takes in two parameters.
    // needToCheck is a boolean value, which is whether the character type has been selected.
    // charToCheck is the string value of the characters
    var validatePassword = function (needToCheck, charToCheck) {
      var passwordIsValid = false;
      if (needToCheck) {
        // Loop through each string of password to check whether selected character type is generated at least once.
        for (var i=0; i<passwordLength; i++) {
          if (password.includes(charToCheck.charAt(i))) {
            // console.log(lowerCase.charAt(i))
            // console.log(i + lowerCase.charAt(i));
            // Found a selected character type in password, return true and exit this function call.
            return true;
          }
          // else {
          //   console.log("character not detected! " + i + "  " + "character is...  " + lowerCase.charAt(i));
          // }
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

    var lowerCaseChecked = false;
    var upperCaseChecked = false;
    var numericChecked = false;
    var specialCharChecked = false;

    // Call validate password function until a valid password with at least 1 of selected character types each is generated and validated.
    while ((lowerCaseChecked && upperCaseChecked && numericChecked && specialCharChecked) !== true) {
      lowerCaseChecked = validatePassword(lowerCase[0], lowerCase[1]);
      upperCaseChecked = validatePassword(upperCase[0], upperCase[1]);
      numericChecked = validatePassword(numeric[0], numeric[1]);
      specialCharChecked = validatePassword(specialChar[0], specialChar[1]);
    }

    console.log("Password is " + password);
    return password;

    // if (hasUpperCase) {
    //   for (var i=0; i<passwordLength; i++) {
    //     if (password.includes(upperCase.charAt(i))) {
    //       validPassword = true;
    //       break;
    //     }
    //     else {
    //       console.log("character not detected! " + i + "  " + "character is...  " + upperCase.charAt(i));
    //       // password = genPassword(passwordLength, charType);
    //     }
    //   }
    //   if (validPassword === false) {
    //     console.log("false detected");
    //     password = concatinatePassword();
    //   }
    // }

    // if (hasNumeric) {
    //   for (var i=0; i<passwordLength; i++) {
    //     if (password.includes(numeric.charAt(i))) {
    //       validPassword = true;
    //       break;
    //     }
    //     else {
    //       console.log("Character not detected! " + i + "  " + "character is...  " + numeric.charAt(i));
    //       // password = genPassword(passwordLength, charType);
    //     }
    //   }
    //   if (validPassword === false) {
    //     console.log("false detected");
    //     password = concatinatePassword();
    //   }
    // }
    
    // if (hasSpecialChar) {
    //   for (var i=0; i<passwordLength; i++) {
    //     if (password.includes(specialChar.charAt(i))) {
    //       validPassword = true;
    //       break;
    //     }
    //     else {
    //       console.log("character not detected! " + i + "  " + "Character is " + specialChar.charAt(i));
    //       // password = genPassword(passwordLength, charType);
    //     }
    //   }
    //   if (validPassword === false) {
    //     console.log("false detected");
    //     password = concatinatePassword();
    //   }
    // }

    // After checked valid password, return password.
    // if (validPassword === true) {
    //   return password;
    // } // If invalid password then Call the the genPassword function to generate password again.
    // else {
    //   console.log("ERRRROR detected!! ");
    // }
  }

  var password = genPassword();

  // var validatePassword = function (password, charType = getCharType()) {
  //   var testA = ['a','b','c'];
  // }

  // lesson learnt, calling a function without passing a parameters when its expected, the parameters will become undefined!!
  return password;
}

// Password validation:
  // 1. check whether the user criteria is met (such as if uppercase is chosen, need to have at least 1 uppercase character in the password) 

  // 2. other checks? Edge cases to minimize error.



