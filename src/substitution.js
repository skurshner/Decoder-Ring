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

    const output = input.toLowerCase().split("");
    if (!encode) {
      return output
        .map(letter => {
          for (let i = 0; i < 26; i++) {
            if (alphabetArray[i] === letter) {
              return i;
            }
          }
          return letter;
        })
        .map(number => {
          number !== " " ? (number = String.fromCharCode(97 + number)) : number;
          return number;
        })
        .join("");
    }

    return output
      .map(letter => letter.charCodeAt(0) - 97) // letters mapped to corresponding ASCII values
      .map(number => {
        // if between 0 and 25, map to corresponding value in alphabet array, else return it back to letter from ASCII value
        number >= 0 && number <= 25 ? (number = alphabetArray[number]) : (number = String.fromCharCode(97 + number));
        return number;
      })
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
