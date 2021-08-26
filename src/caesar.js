// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false; // return false if no shift, shift is 0, < -25, > 25
    if (!encode) {
      // if encode is set to false
      return input // set output variable
        .toLowerCase() // set it to lower case
        .split("") //split into an array
        .map(letter => letter.charCodeAt(0) - 97) // map letters to corresponding numbers
        .map(number => {
          if (number >= 0 && number <= 25) {
            // if number is between 0 and 25 (lowercase letters)
            let shifted = number - shift; // change the value of the number according to the shift
            if (shifted > 25) shifted -= 26; // if shifted value is greater than 25, subtract 26 to wrap it
            if (shifted < 0) shifted += 26; // if shifted value is less than 0, add 26 to wrap it
            return shifted; //return the shifted values
          }
          return number; // return the same value not between 0 and 25
        })
        .map(number => String.fromCharCode(97 + number)) // change the number back to a letter
        .join(""); // join the array back into a string
    }
    // if encode is set to true
    return input // set output variable
      .toLowerCase() // set it to lower case
      .split("") //split into an array
      .map(letter => letter.charCodeAt(0) - 97) // map letters to corresponding numbers
      .map(number => {
        if (number >= 0 && number <= 25) {
          // if number is between 0 and 25 (lowercase letters)
          let shifted = number + shift; // change the value of the number according to the shift
          if (shifted > 25) shifted -= 26; // if shifted value is greater than 25, subtract 26 to wrap it
          if (shifted < 0) shifted += 26; // if shifted value is less than 0, add 26 to wrap it
          return shifted; //return the shifted values
        }
        return number; // return the same value not between 0 and 25
      })
      .map(number => String.fromCharCode(97 + number)) // change the number back to a letter
      .join(""); // join the array back into a string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
