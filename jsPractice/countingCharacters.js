// Count the number of characters in a string

var portalString = "The cake is a lie";

let countingCharacters = stringToCount => {
  console.log(stringToCount + " has " + stringToCount.length + " characters.");
};

// Count the number of times a character appears in a string

let countingCharacters2 = (stringToCount, characterToFind) => {
  let characterCount = 0;

  for (var i = 0; i < stringToCount.length; i++) {
    if (stringToCount[i] == characterToFind) {
      characterCount++;
    }
  }
  console.log("String to search in: " + stringToCount);
  console.log("Character to find: " + characterToFind);
  console.log("Number of times the character appears: " + characterCount);
};

// Count the series of characters in a string

let countingCharacters3 = (str, search) => {
  var count = 0;
  var numChars = search.length;
  /* we need to stop loop based on multiple characters example: if searching "Ohio" with 3 characters at a time we want to stop at h so we do not go past the end of the string */

  var lastIndex = str.length - numChars;

  // We will use a for loop to go through our string

  // This time, we are looking for a series of characters - a substring
  for (var index = 0; index <= lastIndex; index++) {
    // substring gets a part of a string from a start to end index
    var current = str.substring(index, index + numChars); // if the substring matches our series, increase our counter
    if (current == search) {
      count++;
    }
  }
  return count;
};

// Rolling Dice

let rollDice = numSides => {
  return Math.floor(Math.random() * numSides) + 1;
};

for (var i = 0; i < 10; i++) {
  console.log(rollDice(6));
}

// Code practice

let addTwoNumbers = (firstNumber, secondNumber) => { 
    return firstNumber + secondNumber;
}
