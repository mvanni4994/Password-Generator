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

// defines button variable to call character variables
var generateBtn = document.querySelector("#generate");

// Variables to print data
var charEl = document.querySelector("#char");
var spcCharEl = document.querySelector("#spChar");
var lCaseEl = document.querySelector("#lower");
var uCaseEl = document.querySelector("#upper");
var numCharEl = document.querySelector("#num");

// call function

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

