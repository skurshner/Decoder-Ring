// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
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
    // Guard Clause
    if (!encode && input.replace(" ", "").length % 2) return false;
    // return false if length of encoded input without spaces is odd

    // Encode
    if (encode) {
      return input // return the output of the inputted string...
        .toLowerCase() // set to lower case
        .split("") // split into an array
        .map(item => {
          // mapped for number in 'letters' object
          for (letter in letters) {
            // for each key in letters
            letter === item && (item = letters[letter]);
            // if the key matches an item in the array, convert that item to its encoded value
          }
          return item;
        })
        .join(""); // join as a string
    }

    // Decode
    // replace single spaces with double spaces (force an even length) & split into array
    const inputArray = input.replace(" ", "  ").split("");
    const charactersArray = []; // create new array to store separated strings
    for (let i = 1; i < inputArray.length; i += 2) {
      // loop through input array, starting at 2nd element and incrementing by 2
      charactersArray.push(inputArray[i - 1] + inputArray[i]);
      // add values at both index i and one before it as single elements in new array
    }
    return charactersArray // return output of charactersArray...
      .map(item => {
        // mapped for letter in 'letters' object
        for (letter in letters) {
          // for each key in letters
          if (letters[letter] === item) {
            // if the value matches a in the array
            item = letter; // convert that item to its decoded value
            (item === "i" || item === "j") && (item = "(i/j)"); // if item is 'i' or 'j', convert to '(i/j)'
          }
        }
        return item;
      })
      .join("") // join as a string
      .replace("  ", " "); // replace double spaces back to single
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
