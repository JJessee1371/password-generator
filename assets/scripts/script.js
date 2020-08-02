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

let passLength = prompt("Please enter a password length between 8 and 128.");
console.log(passLength);

while (passLength < 8 || passLength > 128) {
  alert("Value must be between 8 and 128.");
  let passLength = prompt("Please enter a password length between 8 and 128.");
    
  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
    {break}
  }
}

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


//Arrays for randomized choices by the computer
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?",]