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

//User prompt questions: 

//String length between 8 and 128

let length = prompt("How many characters long would you like your password?");
  console.log(length);


//Lowercase 
let lowerCase = confirm("Would you like to include lower case letters?");
console.log(lowerCase);

//Uppercase
let upperCase = confirm("Would you like to include upper case letters?");
console.log(upperCase);

//Numeric
let num = confirm("Would you like to include numbers?");
console.log(num);

//Special characters
let special = confirm("Would you like to include special characters?");
console.log(special);