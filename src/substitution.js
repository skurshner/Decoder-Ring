// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function findDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    if (alphabet.length !== 26) return false;
    const alphabetArray = alphabet.split("");
    if (findDuplicate(alphabetArray)) return false;

    // encode
    // split input into an array
    return input
      .toLowerCase()
      .split("")
      .map(letter => letter.charCodeAt(0) - 97)
      .map(number => {
        number >= 0 && number <= 25 ? (number = alphabetArray[number]) : (number = String.fromCharCode(97 + number));
        return number;
      })
      .join("");
    // map to numbers 0-25
    // map to items at alphabet array's index
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
