const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  describe("Function Validation", () => {
    it("should be a function", () => {
      const expected = "function";
      const actual = typeof caesar;
      expect(actual).to.equal(expected);
    });
    it("should return a string", () => {
      const actual = caesar("thinkful", 3);
      expect(actual).to.be.a("string");
    });
  });
  describe("Error Handling", () => {
    it("should return false if there is no shift value", () => {
      const actual = caesar("thinkful");
      expect(actual).to.be.false;
    });
    it("should return false if shift value is 0", () => {
      const actual = caesar("thinkful", 0);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is less than -25", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is greater than 25", () => {
      const actual = caesar("a", 99);
      expect(actual).to.be.false;
    });
  });
  describe("Encoding", () => {
    it("should return a string with letters shifted by a positive number entered for shift", () => {
      const expected = "wklqnixo";
      const actual = caesar("thinkful", 3);
      expect(actual).to.equal(expected);
    });
    it("should return a string with letters shifted by a negative number entered for shift", () => {
      const expected = "qefkhcri";
      const actual = caesar("thinkful", -3);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters, spaces, and non-letter characters", () => {
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8);
      expect(actual).to.equal(expected);
    });
    it("should wrap letters when letters go past the alphabet positively", () => {
      const expected = "cheud pdjdclqh";
      const actual = caesar("Zebra Magazine", 3);
      expect(actual).to.equal(expected);
    });
    it("should wrap letters when letters go past the alphabet negatively", () => {
      const expected = "xyz";
      const actual = caesar("abc", -3);
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding", () => {
    it("should decode correctly when encode is set to false", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should decode correctly when encode is set to false and still ignore capitals, spaces, and non-letter characters", () => {
      const expected = "this is a secret message!";
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      expect(actual).to.equal(expected);
    });
  });
});
