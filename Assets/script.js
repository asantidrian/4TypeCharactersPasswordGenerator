// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var userchoice = window.prompt ("choose the number of digits for your password between 8 and 128");
  var passwordLength =parseInt(userchoice) ;
  console.log(passwordLength);
  if (Number.isInteger(passwordLength)){
    if (passwordLength < 8) {
      window.alert ("Password too Short.It must have more than 8 digits");
    }else if (passwordLength > 128){
      window.alert ("Password too long.The Maximum number of digist is 128");
    }else {
      var uppercaseDigits = window.confirm ("Would you like to include uppercase in you password?");
      var lowercaseDigits = window.confirm ("Would you like to include lowercase in you password?");
      var symbolDigits = window.confirm ("Would you like to include symbols in you password?");
      var numberDigits = window.confirm ("Would you like to include numbers in you password?");
 
      var uppercaseOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      var lowercaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
      var symbolOptions = ["!","@","#","$","%","&","(",")","_","+","~","|","}","{","[","]","?",">","<","/"]
      var numberOptions = ["1","2","3","4","5","6","7","8","9"];
      var charactersOptions= []

      if (!uppercaseDigits && !lowercaseDigits && !symbolDigits && !numberDigits)
        {window.alert ("As none of the character options have been selected, default numeric password created");
        var charactersOptions = numberOptions
        var generatePassword = ""
        for (var i=0;i<passwordLength;i++){
          var randomCharacter = charactersOptions[Math.floor(Math.random() * charactersOptions.length)];
          console.log(randomCharacter);
          generatePassword=generatePassword+randomCharacter;
          console.log(generatePassword);
        }
        return generatePassword;
      }
      else {
      if (uppercaseDigits)
      {var charactersOptions=uppercaseOptions}
 
      if (lowercaseDigits)
      {var charactersOptions=charactersOptions.concat(lowercaseOptions)}
      
      if (symbolDigits)
      {var charactersOptions=charactersOptions.concat(symbolOptions)}
      
      if (numberDigits)
      {var charactersOptions=charactersOptions.concat(numberOptions)}
      
      var generatePassword = ""
      for (var i=0;i<passwordLength;i++){
          var randomCharacter = charactersOptions[Math.floor(Math.random() * charactersOptions.length)];
          generatePassword=generatePassword+randomCharacter;
        }  
        return generatePassword;
        }
      }
     
    }
  else { window.alert ("This is not a number, Please type a number!")};   
    return
} 

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

