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
//Users choose a string length between 8 and 128

let passLength = prompt("Please enter a password length between 8 and 128.");
console.log(passLength);

//Code will run if the user has not entered a valid number
while (passLength < 8 || passLength > 128) {
  alert("Value must be between 8 and 128.");
  let passLength = prompt("Please enter a password length between 8 and 128.");
    
  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
    {break}
  }
}

//Lowercase value prompt
let lowerCase = confirm("Would you like to include lower case letters?");
console.log(lowerCase);

if (lowerCase = true) {
  create.push(upperLetters)
}

//Uppercase value prompt
let upperCase = confirm("Would you like to include upper case letters?");
console.log(upperCase);

if (upperCase = true) {
  for (i = 0; i < upperLetters.length; i++) {
    lowerLetters.push(upperLetters[i].toLowerCase());
  }
  create.push(lowerLetters)
}

//Numeric value prompt
let num = confirm("Would you like to include numbers?");
console.log(num);

if (num = true) {
  create.push(numbers)
}

//Special characters prompt
let special = confirm("Would you like to include special characters?");
console.log(special);

if (special = true) {
  create.push(specChar)
}

//Code will run if user has not selected at least one character type to use in the password. 
if (lowerCase === false && upperCase === false && num === false && special === false) {
  while (lowerCase === false && upperCase === false && num === false && special === false) {
    alert("At least one character selection must be made.");

    let lowerCase = confirm("Would you like to include lower case letters?");

    let upperCase = confirm("Would you like to include upper case letters?");

    let num = confirm("Would you like to include numbers?");

    let special = confirm("Would you like to include special characters?");

  if (lowerCase === true || upperCase === true || num === true || special === true) {
    console.log(lowerCase, upperCase, num, special);
    {break}
    }
  }
}


//Arrays for randomized choices by the computer
const create = []

const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const lowerLetters = []

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "<", ">"]

// const randomize = {randomUpper, randomLower, randomNumber, randomChar}

//Functions that will produce a random letter, number or character 
// function randomUpper() {
//   let upperChoice = letters[Math.floor(Math.random() * (letters.length))];
//   console.log(upperChoice);
// }

// function randomLower() {
//   let lowerChoice = letters[Math.floor(Math.random() * (letters.length))];
//   console.log(lowerChoice.toLowerCase());
// }

// function randomNumber() {
//   let numberChoice = numbers[Math.floor(Math.random() * (numbers.length))];
//   console.log(numberChoice);
// }

// function randomChar() {
//   let specialChoice = specChar[Math.floor(Math.random() * (specChar.length))];
//   console.log(specialChoice);
// }

// //Function chooses from all random values
// let allRandom = randomize[Math.floor(Math.random() * (randomize.length))];
// console.log(allRandom);

//Code to be run based off of character choice input from user
// if (lowerCase === true && upperCase === true && num === true && special === true) {
//   for (i = 0; i < passLength; i++) {
//     let password = randomize[Math.floor(Math.random() * (randomize.length))];
//     console.log(password);
//   }
// }
