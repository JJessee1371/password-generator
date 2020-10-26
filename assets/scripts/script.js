const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


//Arrays for randomized choices by the computer
const lenSelect = document.getElementById('#length');
const capital = document.getElementById('#capital');
const lower = document.getElementById('#lower');
const nums = document.getElementById('#numbers');
const special = document.getElementById('#special');
const combinedArr = [];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = [];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "<", ">"];


//Main function - generating a password from the desired values and returning the password.
function generatePassword() {



//Code will repeat the above questions until the user has selected at least one character type to use 
while (upperCase === false && lowerCase === false && num === false && special === false) {
  alert("At least one character selection must be made.");

  let upperCase = confirm("Would you like to include upper case letters?");
    if (upperCase === true) {
      combinedArr = combinedArr.concat(upperLetters);
    };

  let lowerCase = confirm("Would you like to include lower case letters?");
    if (lowerCase === true) {
      for (i = 0; i < upperLetters.length; i++) {
        lowerLetters = upperLetters[i].toLowerCase();
        combinedArr = combinedArr.concat(lowerLetters);
      };
    }; 

  let num = confirm("Would you like to include numbers?");
    if (num === true) {
      combinedArr = combinedArr.concat(numbers);
    };  

  let special = confirm("Would you like to include special characters?");
    if (special === true) {
      combinedArr = combinedArr.concat(specChar);
    };

  if (lowerCase === true || upperCase === true || num === true || special === true) {
    {break};
    };
};

let password = "";
for (i = 0; i < passLength; i++) {
  password = password + combinedArr[Math.floor(Math.random() * combinedArr.length)];
  };
  return password;
};








