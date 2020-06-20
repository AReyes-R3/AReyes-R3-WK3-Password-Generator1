// Define Imput Values
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()(){}[]=<>?-,.~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

let userResponse = {
  passwordLength: 0,
  numbers: "",
  includeUpper: "",
  includeLower: "",
  includeSymbols: "",
};

// Generate IDs
const generateElement = document.getElementById("generate");
const passwordTextArea = document.getElementById("password");

// User Criteria
function passwordCriteria() {
  //prompted for the length of the password
  while (userResponse.passwordLength < 8 || userResponse.passwordLength > 128) {
    userResponse.passwordLength = prompt(
      "Please enter desired password length.  Must be between 8 to 128"
    );
    if (userResponse.passwordLength < 8) {
      alert("Please enter a number greater than 8");
    } else if (userResponse.passwordLength > 128) {
      alert("Please enter a number less than 128");
    }
  }
  //prompted for numbers to include in the password
  while (
    userResponse.numbers.toLowerCase() != "yes" &&
    userResponse.numbers.toLowerCase() != "no"
  ) {
    userResponse.numbers = prompt(
      "Do you want your password to include numbers?  Yes or No?"
    );
    console.log(userResponse.numbers);
    if (userResponse.numbers == null) {
      alert("Please enter Yes or No");
    }
  }
  //prompted for upper case letters to be include in the password
  while (
    userResponse.includeUpper.toLowerCase() != "yes" &&
    userResponse.includeUpper.toLowerCase() != "no"
  ) {
    userResponse.includeUpper = prompt(
      "Do you want your password to include Upper case letters?  Yes or No?"
    );
    console.log(userResponse.includeUpper);
    if (userResponse.includeUpper == null) {
      alert("Please enter Yes or No");
    }
  }
  //prompted for lowercase letters to be include in the password
  while (
    userResponse.includeLower.toLowerCase() != "yes" &&
    userResponse.includeLower.toLowerCase() != "no"
  ) {
    userResponse.includeLower = prompt(
      "Do you want your password to include lower case letters?  Yes or No?"
    );
    console.log(userResponse.includeLower);
    if (userResponse.includeLower == null) {
      alert("Please enter Yes or No");
    }
  }
  //prompted for symbols to be include in the password
  while (
    userResponse.includeSymbols.toLowerCase() != "yes" &&
    userResponse.includeSymbols.toLowerCase() != "no"
  ) {
    userResponse.includeSymbols = prompt(
      "Do you want your password to include symbols?  Yes or No?"
    );
    console.log(userResponse.includeSymbols);
    if (userResponse.includeSymbols == null) {
      alert("Please enter Yes or No");
    }
  }
  //Validated and at least one character type should be selected
  if (
    userResponse.numbers.toLowerCase() == "no" &&
    userResponse.includeUpper.toLowerCase() == "no" &&
    userResponse.includeLower.toLowerCase() == "no" &&
    userResponse.includeSymbols.toLowerCase() == "no"
  ) {
    alert(
      "Warning! in order to generate a password you mush enter Yes on one criteria"
    );
    userResponse = null;
  }
}
function generatePassword() {
  passwordCriteria();
  if (userResponse == null) {
    return "Please enter your passward generation criteria.";
  } else {
    const passwordString = [];
    const listOfFunctions = [];

    if (userResponse.numbers.toLowerCase() == "yes") {
      listOfFunctions.push(getRandomNumber);
    }
    if (userResponse.includeUpper.toLowerCase() == "yes") {
      listOfFunctions.push(getRandomUpper);
    }
    if (userResponse.includeLower.toLowerCase() == "yes") {
      listOfFunctions.push(getRandomLower);
    }
    if (userResponse.includeSymbols.toLowerCase() == "yes") {
      listOfFunctions.push(getRandomSymbol);
    }
    for (let i = 0; i < userResponse.passwordLength; i++) {
      const character = listOfFunctions[
        Math.floor(Math.random() * listOfFunctions.length)
      ]();
      passwordString.push(character);
    }
    return passwordString.join("");
  }
}
// Print generated password into the DOM
function writePassword() {
  let password = generatePassword();
  passwordTextArea.value = password;
  userResponse = {
    passwordLength: 0,
    numbers: "",
    includeUpper: "",
    includeLower: "",
    includeSymbols: "",
  };
}
generateElement.addEventListener("click", writePassword);
