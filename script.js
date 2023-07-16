// Assignment code here
var numbers = "1234567890"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = "!@#$%^&*()_+[]{};:<,.>?/`~"
var userCharacters = ""

function generatePassword(){
  var passwordLength = prompt("How long do you want your password? Critera 8-128")

  var includeNumbers = confirm("Do you want to include numbers?")
  var includeUppercaseLetters = confirm("Do you want to include uppercase numbers?")
  var includeLowercaseLetters = confirm("Do you want to include lowercase letters?")
  var includeSpecialCharacters = confirm("Do you want to include special characters?")
  

  if(passwordLength < 8 || passwordLength > 128){
    alert("Error, password needs to be 8 and 128 characters") 
    return
  }

  if(!includeNumbers && !includeUppercaseLetters && !includeLowercaseLetters && !includeSpecialCharacters){
    alert("Error, needs to include atleast one character set")
    return
  }

  if(includeNumbers) {
    userCharacters += numbers
  }

  if(includeUppercaseLetters) {
    userCharacters += uppercaseLetters
  }

  if(includeLowercaseLetters) {
    userCharacters += lowercaseLetters
  }

  if(includeSpecialCharacters) {
    userCharacters += specialCharacters
  }

  var userPassword = ""


  for(var i = 0; i < passwordLength; i++ ) {
    var randomIndex = Math.floor(Math.random()*userCharacters.length)
    var randomChar = userCharacters[randomIndex]
    userPassword += randomChar
  }
  return userPassword

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
