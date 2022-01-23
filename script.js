function passwordGen() {

    var choiceLength = window.prompt("Length of the password");

    var choiceLoCase = window.prompt("Lower case? Y/N");

    var choiceUpCase = window.prompt("Upper case? Y/N");

    var choiceNumber = window.prompt("Numbers? Y/N");

    var choiceSpecSim = window.prompt("Symbles? Y/N");

}

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
    if (choiceNumbers.toLowerCase() == 'y'){
        [passwordOptions += keys.numbers]
    }
    if (choiceSpecSim.toLowerCase() == 'y'){
        [passwordOptions += keys.specSim]
    }

    console.log(passwordOptions)