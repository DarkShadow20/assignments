/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
    let vowelCount = 0
    let operatedString = str.toLowerCase()
    let strLength = str.length
    for(let i=0;i<strLength;i++){
      if(operatedString.charAt(i) == "a" || operatedString.charAt(i) == "e" || operatedString.charAt(i) == "i" || operatedString.charAt(i) == "o" || operatedString.charAt(i) == "u"){
        vowelCount = vowelCount + 1
      }
    }
    return vowelCount
}
console.log(countVowels("Hi therE"))
module.exports = countVowels;