 // generates a button linked to #generate in line 28
var generateBtn = document.querySelector("#generate");

//The following are strings and arrays that would be used in password generation
var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = lowerList.toUpperCase();
var symList = ".;'[]/<>?:{}\+-()*&^%$#@!";
var numList  ="123456789"
var arrayFinal = [];
var cleanString = "";
var genString = [lowerList,upperList,numList,symList];

console.log(genString)

//this function "removes" all instances of comma, .replace method does not work
function theShortcut(str){
  for(count = 0;count<str.length;count++){
    if (str.charAt(count) != ","){
      cleanString = cleanString.concat(str.charAt(count)); 
    }
  }
  return cleanString;
}


//Function below takes in user input regarding password preferences
//Function then uses these preferences in generating a random password
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
  
  //All user input is saved in an array to be called later
  var inputAll = [lowPas,capPas,numPas,symPas];
  
  console.log(inputAll);
  var finalList = [];

  //user input array is called in for function to prevent usage of multiple if statements
  //takes user preferences and makes an array containing possible characters
  for (i=0;i<4;i++){
    if (inputAll[i]){
      arrayFinal.push(genString[i]);
    }
  }

  console.log("This be the final array: " + arrayFinal);
  //turns array into string; problem is the insertion of comma into string
  var megaString = arrayFinal.join();
  console.log("This be the final string: " + megaString);
  

  //Makes final array containing characters for password
  for(count=0;count<lenPas;count++){
    finalList.push(megaString.charAt(Math.floor(Math.random()*megaString.length)));
  }
  
  var pseudoPassword= finalList.join();
  console.log(pseudoPassword.length);
  var passwordString = theShortcut(pseudoPassword);
  console.log("This should be the final password: " + passwordString);
  return passwordString;

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

