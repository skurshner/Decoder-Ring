// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // create string to store alphabet
  const alphabetArray = alphabet.split(""); // split alphabet into array to access index
  //console.log(alphabetArray);

  function caesar(input, shift = 0, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false; // return false if no shift, shift is 0, < -25, > 25
    if (encode) {
      // if encode is true
      const inputArray = input.toLowerCase().split(""); // convert input to lower case and split into an array
      console.log(inputArray);
    }

    // map the array to numbers, alphabet array doesn't include index, ignore (continue)
    //
  }

  return {
    caesar,
  };
})();

caesarModule.caesar("ABC", 1);

module.exports = { caesar: caesarModule.caesar };
