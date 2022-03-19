// prompt windows

// password length prompt
var passwordLength = function() {
  var lengthInfo = prompt("How long would you like your password to be?", "Please select a number between 8-128");

  // convert string answer into numerical value
  lengthInfo = Number(lengthInfo);

   // user cannot leave field blank 
   if (lengthInfo === "" || lengthInfo === null) {
    window.alert("Please enter a number between 8-128");
    return passwordLength();
  }

  // user must choose number between 8-128
  if (lengthInfo < 8 || lengthInfo > 128) {
    window.alert("Please enter a number between 8-128");
    return passwordLength();
  }

   // user cannot enter anything except for a numbeR????
  // if (lengthInfo != Number ) {
   // window.alert("Please enter a number between 8-128");
  //  return passwordLength();
 // }

 // when conditions are met, continue to next prompt
 if (passwordLength) {
   passwordLower();
 }
}

// lowercase letters
var passwordLower = function(){
  var lengthInfo = prompt("Would you like to include lowercase letters?", "Please type Y or N");


}



// !generator functions!
// random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// random uppercase letter 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// random special character
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// how to call these functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};





// define generate password function
function generatePassword() {

// 1 prompt user for password criteria
//  a. password length between 8-128
//  b. Lowercase, uppercase, numbers, special characters
// 2 Validate the input 
// 3 generate password based on criteria


// 4 Display generated password on the page 
  return "Generated password will go here!";
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
generateBtn.addEventListener("click", passwordLength , );
 