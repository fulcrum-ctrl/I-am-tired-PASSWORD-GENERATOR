// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = lowerList.toUpperCase();
var symList = ".;'[]/<>?:{}\+-()*&^%$#@!";
var numList  ="123456789"
var arrayFinal = [];
var cleanString = "";
function theShortcut(str){
  for(count = 0;count<str.length;count++){
    if (str.charAt(count) != ","){
      cleanString = cleanString.concat(str.charAt(count)); 
    }
  }
  return cleanString;
}
//console.log( "This is the upperList: " + upperList);
//console.log(lowerList.charAt(Math.floor(Math.random()*10))); //olrayt we now have our random function working
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
  fuckThis = "";
  for(count=0;count<lenPas;count++){
    finalList.push(megaString.charAt(Math.floor(Math.random()*megaString.length)));
  }
  var iAmTired = finalList.join();
  console.log(iAmTired.length);
  console.log("This should be the final password list: " + theShortcut(iAmTired));
  var finalPassword = theShortcut(iAmTired);
  console.log("This should display on that there box: " + finalPassword);
  return finalPassword;
  }
  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;

}
//console.log(document.querySelector(#password));
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

