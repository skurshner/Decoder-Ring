// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift = 0, encode = true) {
    // Guard Clause
    if (shift === 0 || shift < -25 || shift > 25) return false; // return false if no shift, shift is 0, < -25, > 25

    // Encode & Decode
    return input // return the output of the inputted string...
      .toLowerCase() // set to lower case
      .split("") // split into an array
      .map(letter => letter.charCodeAt(0) - 97) // with letters mapped to corresponding ASCII values
      .map(number => {
        // with shifted numbers mapped
        if (number >= 0 && number <= 25) {
          // if number is between 0 and 25 (lowercase letters)
          let shifted; // initialize variable to store shifted number
          encode ? (shifted = number + shift) : (shifted = number - shift);
          // based on 'encode,' either subtract or add the shifted value from each number
          shifted > 25 && (shifted -= 26); // if shifted value is greater than 25, subtract 26 to wrap it
          shifted < 0 && (shifted += 26); // if shifted value is less than 0, add 26 to wrap it
          return shifted; //return the shifted value
        }
        return number; // return the same value if not between 0 and 25
      })
      .map(number => String.fromCharCode(97 + number)) // mapped back to letters from ASCII values
      .join(""); // joined back into a string
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar,
};
