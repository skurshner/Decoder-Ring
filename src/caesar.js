const caesarModule = (function () {
  function caesar(input, shift = 0, encode = true) {
    // Guard Clause
    if (shift === 0 || shift < -25 || shift > 25) return false;

    // Encode & Decode Caesar Shift
    return input
      .toLowerCase()
      .split("")
      .map(letter => letter.charCodeAt(0) - 97)
      .map(number => {
        if (number >= 0 && number <= 25) {
          let shifted;
          // based on 'encode,' either subtract or add the shifted value from each number
          encode ? (shifted = number + shift) : (shifted = number - shift);
          shifted > 25 && (shifted -= 26);
          shifted < 0 && (shifted += 26);
          return shifted;
        }
        return number;
      })
      .map(number => String.fromCharCode(97 + number))
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar,
};
