// Assignment Code
/* This line assigns the button element with the id attribute 
set to  "generate" to the variable generateBtn.  
It uses document.querySelector() method to select the element*/
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*This code defines the writePassword()
function which is responsible for generating a password and 
displaying it in the #password input field..*/
function writePassword() {
  var password = generatePassword(); //this generatePassword was originally being assigned but it did not exist
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
/* The event is the "click" which triggers when the button is clicked.
writePassword function is the callback function to be executed when 
the "click" event occurs on the button. It will generate and display the password.*/
generateBtn.addEventListener("click", writePassword);

//Created the generatePassword function since it was the missing piece needed to complete this.
//Used Chrome DevTools to Inspect the starter code and found it was missing the generatePassword function!
function generatePassword() {
  var password = "";
  var lengthInput = (prompt("Enter desired password length (8-128 characters)")); //lengthInput variable is used to store the password length input by the user

  var length = Number(lengthInput);

  // validate password length
  // The !Number.isInteger(length) makes sure only numbers are entered for password length
  // then, length is less than 8, or length is greater than 128.
  // this if statement sends an alert if conditions aren't met.
  if (!Number.isInteger(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128 characters");
    return;
  }

  //Promt for character types to include
  //Used 'confirm' to make sure the user includes the right password requirements
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  //Confirm at least one of each character type is selected
  //Using logical operators to compare if any of the necessary character types are NOT acceptable/are false
  //Sends an alert to the user that they didn't confirm at lesat one character type is not used from the required credentials
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one character type!");
    return;
  }

  //Listed out all the variables for each character type that's needed
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "1234567890";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //Put together character types based on user confirmed types
  //Used if statements and the += operator to concatenate the strings together after each variable is checked
  var charType = "";

  if (includeLowercase) {
    charType += lowercaseChars;
  }

  if (includeUppercase) {
    charType += uppercaseChars;
  }

  if (includeNumbers) {
    charType += numberChars;
  }

  if (includeSpecialChars) {
    charType += specialChars;
  }

  //Generate the random password
  //Using a for loop to iterate through the array. Using Math.random
  //to generate a random number then floor to round the number to the near whole number
  //Used the charAt method to put together the randomly generated characters
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * charType.length);
    password += charType.charAt(randomNumber);
  }

  return password;

}



// Special Characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// lowercase Characters "abcdefghijklmnopqrstuvwxyz"
// UPPERCASE Letters "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Password Length min: 8 max: 128