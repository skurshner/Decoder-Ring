// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const letters = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
    " ": " ",
  };
  function polybius(input, encode = true) {
    if (!encode) {
      if (input.replace(" ", "").length % 2) return false;
      const inputArray = input.replace(" ", "  ").split(""); // replace single spaces with double spaces & convert to array
      const charactersArray = [];
      // create new array to store separated strings
      for (let i = 1; i < inputArray.length + 1; i += 2) {
        // loop through input array
        charactersArray.push(inputArray[i - 1] + inputArray[i]);
      }
      return charactersArray
        .map(character => {
          // mapped for characters in 'letters' object
          for (let letter in letters) {
            // for each key in letters
            if (letters[letter] === character) {
              // if the value matches a character in the array
              character = letter;
              if (character === "i" || character === "j") character = "(i/j)";
              // convert that character to it's decoded value
            }
          }
          return character;
        })
        .join("") // join as a string
        .replace("  ", " "); // replace double spaces with single
    }
    return input // return the output of the inputted string...
      .toLowerCase() // set to lower case
      .split("") // converted into an array
      .map(character => {
        // mapped for characters in 'letters' object
        for (let letter in letters) {
          // for each key in letters
          if (letter === character) {
            // if the key matches a character in the array
            character = letters[letter];
            // convert that character to it's encoded value
          }
        }
        return character;
      })
      .join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
