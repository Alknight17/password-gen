var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];

function generatePassword() {
// window prompts
var passwordLength = prompt('How many characters would you like your password', 'Please enter a number between 1-128');
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select a number between 8-128");
  } else {
    var number = confirm("would you like numbers in you password?");
    var capital = confirm("Do you want uppercase letters in your password?");
    var special = confirm("Would you like special characters in your password?");
    var lower = confirm("would you like lowercase letters in your password?");
  }
  var resultArray = [];
  if (number === true) {
    resultArray = resultArray.concat(numbers);
  } else if (number === false) {
    ""
  }

  if (capital === true) {
    resultArray = resultArray.concat(upperCase);
  } else if (capital === false) {
    ""
  }

  if (special === true) {
    resultArray = resultArray.concat(specialChar);
  } else if (special === false) {
    ""
  }

  if (lower === true) {
    resultArray = resultArray.concat(lowerCase);
  } else if (lower === false) {
    ""
  }
  
   // console log variables 
  var password =''
  for (var i = 0; i < passwordLength; i++ ) {
    var index = Math.floor(Math.random() * resultArray.length)  
    var char = resultArray[index]; 
    password = password + char
  }

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 