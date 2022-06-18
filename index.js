function reverseString(word) {
  //the reversing logic
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  // take the word argument and reverse it
  // if the reverse of the word is equivalent to it,
  // return true else return false
  const reversedWord = reverseString(word)
  return word === reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome('today'))
}

module.exports = isPalindrome;
