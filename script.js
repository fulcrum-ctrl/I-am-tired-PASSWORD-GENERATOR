// generates a button linked to #generate in line 28
var generateBtn = document.querySelector("#generate");

//The following are strings that would be used in password generation
var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = lowerList.toUpperCase();
var symList = ".;'[]/<>?:{}\+-()*&^%$#@!";
var numList  ="123456789"
var arrayFinal = [];
var cleanString = "";

//this function "removes" all instances of comma, .replace method does not work
function theShortcut(str){
  for(count = 0;count<str.length;count++){
    if (str.charAt(count) != ","){
      cleanString = cleanString.concat(str.charAt(count)); 
    }
  }
  return cleanString;
}

var genString = [lowerList,upperList,numList,symList];
console.log(genString)
function generatePassword(){
  var lenPas = prompt("Input number of characters desired for password: ");
  var lowPas = confirm("Do you want to include lowercase letters?");
  var capPas = confirm("Do you want to include uppercase letters?");
  var numPas = confirm("Do you want to include numeric characters?");
  var symPas = confirm("Do you want to include special characters?");
  console.log("Include lowercase: " + lowPas);
  console.log("Include uppercase: " + capPas);
  console.log("Include number: " + numPas);
  console.log("Include symbols: " + symPas);
  var inputAll = [lowPas,capPas,numPas,symPas];
  console.log(inputAll);
  var passwordString = "";
  var finalList = [];
  for (i=0;i<4;i++){
    if (inputAll[i]){
      arrayFinal.push(genString[i]);
    }
  }
  console.log("This be the final array: " + arrayFinal);
  var megaString = arrayFinal.join();
  console.log("This be the final string: " + megaString);
  passwordString.concat(megaString.charAt(Math.floor(Math.random()*88)));
  for(count=0;count<lenPas;count++){
    finalList.push(megaString.charAt(Math.floor(Math.random()*megaString.length)));
  }
  var iAmTired = finalList.join();
  console.log(iAmTired.length);
  console.log("This should be the final password: " + theShortcut(iAmTired));
  return theShortcut(iAmTired);
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("What's happening here: " + password); 
  passwordText.value = password;

}
//triggers writePassword function upon click
generateBtn.addEventListener("click", writePassword);

