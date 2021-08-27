// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // function to search through an array and return true if any duplicates
  function findDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
  }

  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length !== 26) return false; // if alphabet length not 26, return false
    const alphabetArray = alphabet.split(""); // convert alphabet string to array;
    if (findDuplicate(alphabetArray)) return false; // if any duplicates, return false

    const output = input.toLowerCase().split(""); // convert input to lower case and split into array
    if (encode) {
      // Encode
      return output // return output array...
        .map(letter => letter.charCodeAt(0) - 97) // with letters mapped to corresponding ASCII values
        .map(number => {
          // mapped using the entered alphabet
          number >= 0 && number <= 25
            ? (number = alphabetArray[number])
            : (number = String.fromCharCode(97 + number));
          // if between 0 and 25, map to corresponding value in alphabet array, else return it back to letter from ASCII value
          return number;
        })
        .join(""); // join the array back into a string
    }

    // Decode
    return output // return the output of the output array...
      .map(letter => {
        // mapped to the index of the corresponding character in alphabet array
        alphabetArray.forEach((character, index) => {
          character === letter && (letter = index);
          // if letter in output array matches a character in alphabet, assign letter to corresponding index
        });
        return letter;
      })
      .map(number => {
        // mapped back to a letter
        number !== " " && (number = String.fromCharCode(97 + number));
        // if number is not a space, map it back to a letter from the ASCII value
        return number;
      })
      .join(""); // joined back into a string
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
