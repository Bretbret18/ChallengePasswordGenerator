var generateBtn = document.querySelector("#generate");

var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '~']

generateBtn.addEventListener("click", function (event) {
  askForPassword();
});


function askForPassword() {
  var passLength = parseInt(prompt('How many characters would you like in your password?'));

  while(isNaN(passLength) === true){
    alert('numbers only');
    passLength = parseInt(prompt('How many characters would you like in your password?'));
  }

  if (passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8 and 128 characters.");
    return;
  }

  var hasLowerCase = confirm('Would you like to include lowercase letters in your password?');
  var hasUpperCase = confirm(' Would you like to include uppercase letters in your password?');
  var hasNumeric = confirm(' Would you like to include numbers in you password?');
  var hasSymbols = confirm(' Would you like to include symbols in your password?');

  if(hasLowerCase === false && hasUpperCase === false && hasNumeric === false && hasSymbols === false){
    alert('at least one password character type has to be selected');
    return;
  };


  var password = '';
  for(i = 0; i < passLength; i++) {

    if(hasLowerCase && password.length < passLength){
      var index = Math.floor(Math.random() * lowercaseArray.length);
      password += lowercaseArray[index];
    }

    if(hasUpperCase && password.length < passLength) {
      var index = Math.floor(Math.random() * uppercaseArray.length);
    password += uppercaseArray[index];
    }

    if(hasNumeric && password.length < passLength) {
      var index = Math.floor(Math.random() * numericArray.length);
      password += numericArray[index];
    }

    if(hasSymbols && password.length < passLength) {
      var index = Math.floor(Math.random() * symbolsArray.length);
      password += symbolsArray[index];
    }

  }

  
  var passTextEl = document.querySelector("#password");
  passTextEl.value = password;
  }