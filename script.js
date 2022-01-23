function passwordGen() {

    var choiceLength = window.prompt("Length of the password");

    var choiceLoCase = window.prompt("Lower case? Y/N");

    var choiceUpCase = window.prompt("Upper case? Y/N");

    var choiceNumber = window.prompt("Numbers? Y/N");

    var choiceSpecSim = window.prompt("Symbles? Y/N");

}

const key = {
    loCaseChars :
    "abcdefghijklmnopqrstuvwxyz",
    upCaseChars :
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers :
    "1234567890",
    specSim :
    "!@#$%^&*()" 
}