
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