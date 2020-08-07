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







//Arrays for randomized choices by the computer
let combinedArr = [];

const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowerLetters = [];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "<", ">"];


//Prompts and confirms gathering user input: 
//User chooses a string length between 8 and 128
let passLength = prompt("Please enter a password length between 8 and 128.");

//Code will run if the user has not entered a valid number
while (passLength < 8 || passLength > 128) {
  alert("Value must be between 8 and 128.");
  passLength = prompt("Value must be between 8 and 128.");
}


//Confirm if user would like to include uppercase letters
let upperCase = confirm("Would you like to include upper case letters?");

if (upperCase === true) {
  combinedArr = combinedArr.concat(upperLetters);
}


//Confirm if user would like to include lowercase letters
let lowerCase = confirm("Would you like to include lower case letters?");

if (lowerCase === true) {
  for (i = 0; i < upperLetters.length; i++) {
    lowerLetters = upperLetters[i].toLowerCase();
    combinedArr = combinedArr.concat(lowerLetters);
  }
}


//Confirm if user would like to include numeric values
let num = confirm("Would you like to include numbers?");

if (num === true) {
  combinedArr = combinedArr.concat(numbers);
}


//Confirm if user would like to include special characters
let special = confirm("Would you like to include special characters?");

if (special === true) {
  combinedArr = combinedArr.concat(specChar);
}


//Code will repeat the above questions until the user has selected at least one character type to use 
while (upperCase === false && lowerCase === false && num === false && special === false) {
  alert("At least one character selection must be made.");

  let upperCase = confirm("Would you like to include upper case letters?");
    if (upperCase === true) {
      combinedArr = combinedArr.concat(upperLetters);
    }


  let lowerCase = confirm("Would you like to include lower case letters?");
    if (lowerCase === true) {
      for (i = 0; i < upperLetters.length; i++) {
        lowerLetters = upperLetters[i].toLowerCase();
        combinedArr = combinedArr.concat(lowerLetters);
      }
    }
      

  let num = confirm("Would you like to include numbers?");
    if (num === true) {
      combinedArr = combinedArr.concat(numbers);
    }
      

  let special = confirm("Would you like to include special characters?");
    if (special === true) {
      combinedArr = combinedArr.concat(specChar);
    }

  if (lowerCase === true || upperCase === true || num === true || special === true) {
    {break};
    }
}


//Main function - generating a password from the desired values and returning the password.
function generatePassword() {
let password = "";
for (i = 0; i < passLength; i++) {
  password = password + combinedArr[Math.floor(Math.random() * combinedArr.length)];
  }
  return password;
}








