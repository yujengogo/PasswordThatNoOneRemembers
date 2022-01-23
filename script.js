// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passwordText = document.querySelector("#password");

  var choiceLength = window.prompt("Length of the password");

  if (choiceLength <8 || choiceLength > 128) {
      window.alert("please choose a number between 8-128")
      return
  }
  var choiceLoCase = window.prompt("Lower case? Y/N");

  var choiceUpCase = window.prompt("Upper case? Y/N");

  var choiceNumber = window.prompt("Numbers? Y/N");

  var choiceSpecSim = window.prompt("Symbles? Y/N");

  const keys = {
      loCaseChars :
      "abcdefghijklmnopqrstuvwxyz",
      upCaseChars :
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers :
      "1234567890",
      specSim :
      "!@#$%^&*()" 
  }

  let passwordOptions = ''
  if (choiceLoCase.toLowerCase() == 'y'){
      [passwordOptions += keys.loCaseChars]
  }
  if (choiceUpCase.toLowerCase() == 'y'){
      [passwordOptions += keys.upCaseChars]
  }
  if (choiceNumber.toLowerCase() == 'y'){
      [passwordOptions += keys.numbers]
  }
  if (choiceSpecSim.toLowerCase() == 'y'){
      [passwordOptions += keys.specSim]
  }

  console.log(passwordOptions)

  let password = ''

  for (var i = 0; i < choiceLength; i++ ) {
      var randomChar = passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
      password += randomChar
  }
  console.log(passwordText)

 passwordText.innerHTML = password;

}


