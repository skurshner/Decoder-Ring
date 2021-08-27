// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // function to search through an array and return true if any duplicates
  function findDuplicate(array) {
    // converts to set and measures whether or not the length is the same as the original array
    return new Set(array).size !== array.length;
  }

  function substitution(input, alphabet = "", encode = true) {
    // Guard Clauses
    if (alphabet.length !== 26) return false; // if alphabet length not 26, return false
    const alphabetArray = alphabet.split(""); // convert alphabet string to array;
    if (findDuplicate(alphabetArray)) return false; // if any duplicates, return false

    const output = input.toLowerCase().split(""); // convert input to lower case and split into array

    // Encode
    if (encode) {
      return output // return output array...
        .map(letter => letter.charCodeAt(0) - 97) // with letters mapped to corresponding ASCII values
        .map(item => {
          // mapped using the entered alphabet
          item >= 0 && item <= 25
            ? (item = alphabetArray[item]) // if between 0 and 25, map to corresponding value in alphabet array,
            : (item = String.fromCharCode(97 + item)); // else return it back to original letter from ASCII value
          return item;
        })
        .join(""); // join the array back into a string
    }

    // Decode
    return output // return the output of the output array...
      .map(item => {
        // mapped to the index of the corresponding letter in alphabet array
        alphabetArray.forEach((letter, index) => {
          // if item in output array matches a letter in alphabet, assign item to corresponding index
          letter === item && (item = index);
        });
        return item;
      })
      .map(item => {
        // mapped back to a letter
        // if number is not a space, map it back to a letter from the ASCII value
        item !== " " && (item = String.fromCharCode(97 + item));
        return item;
      })
      .join(""); // joined back into a string
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
