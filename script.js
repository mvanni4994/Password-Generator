// Assignment Code

// Password Characters Defined as Alpha, Numeric, and Special Characters

var passLowerCase = "abcdefghijklmnopqrstuvwxyz";
var passUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var passNum = "1234567890";
var passSp = "!@#$%^&*.?";

// Sources
var passLowerSource = passLowerCase.split ("");
var passUpperSource = passUpperCase.split ("");

var passNumSource = passNum.split("");
var passSpSource = passSp.split ("");

var passSource = [];

// defines button to call character variables
var generateBtn = document.querySelector("#generate");

// Variables to print data
var char = document.querySelector("#char");
var spChar = document.querySelector("#spChar");
var lower = document.querySelector("#lower");
var upper = document.querySelector("#upper");
var num = document.querySelector("#num");

// call function to generate password
function generatePassword() {
var password = "";
var passLength = parseInt(
    prompt("Please set a password between 8 and 128 characters")
);
if (passLength < 8 || passLength > 128 || passLength ===  NaN || passLength === null) {
alert ("8 to 128 characters must be entered. These can include special characters and numbers Please verify.")
passwordText.value = "";
return;
else{
    alert("Selected: " + passLength + "characters.");
    char.textContent = passLength;
}

if (spChar) {
    passSource.concat(passSpSource);
}
if (lower) {
    passSource.concat(passLowerSource);
}
if (upper){
    passSource.concat(passUpperSource);
}
if (num){
    passSource.concat(passNumSource);
}
for (i = 0, i < passLength; i++; ) {
    password = passSource.charAt(Math.floor(Math.random() * passSource.length);
    return password;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

