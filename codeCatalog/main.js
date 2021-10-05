
//Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


function alphabetPosition(text) {
    let alphaArray = [null, 'a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let splitText = text.toString().toLowerCase().split(' ').toString().split('')
    let newArr = splitText.filter(itemInArray => alphaArray.includes(itemInArray))
    let newerArr = newArr.map(itemInArray => alphaArray.indexOf(itemInArray))
    text = newerArr.join(' ')
    return text;
  }



//////////////////////////////////////////////////////


  // A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

  // Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;
  
  // decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => 'password123'
  // decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
  // decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false


  function decodePass( passArr, bin ){
    //convert the binary to characters and join as a string
      bin = bin.split(' ')
      let converted = bin.map(elem => String.fromCharCode(parseInt(elem, 2))).join("")
    
    //compare to password
      if(passArr.includes(converted)){
        return converted
      }else{
        return false
      }
  }

  ////////////////////////////////////////////