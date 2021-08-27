const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar", () => {
  describe("Function Validation", () => {
    it("should be a function", () => {
      const expected = "function";
      const actual = typeof caesar;
      expect(actual).to.equal(expected);
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
    it("should return encoded message as a string", () => {
      const actual = caesar("thinkful", 3);
      expect(actual).to.be.a("string");
    });
    it("should encode correctly when a positive number is entered for shift", () => {
      const expected = "wklqnixo";
      const actual = caesar("thinkful", 3);
      expect(actual).to.equal(expected);
    });
    it("should encode correctly when a negative number is entered for shift", () => {
      const expected = "qefkhcri";
      const actual = caesar("thinkful", -3);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const expected = "amkzmb";
      const actual = caesar("SECRET", 8);
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const expected = "i amkzmb umaaiom";
      const actual = caesar("a secret message", 8);
      expect(actual).to.equal(expected);
    });
    it("should ignore non-letter characters", () => {
      const expected = "...amkzmb!";
      const actual = caesar("...secret!", 8);
      expect(actual).to.equal(expected);
    });
    it("should wrap when letters go past the alphabet positively", () => {
      const expected = "cheud pdjdclqh";
      const actual = caesar("Zebra Magazine", 3);
      expect(actual).to.equal(expected);
    });
    it("should wrap when letters go past the alphabet negatively", () => {
      const expected = "xyz";
      const actual = caesar("abc", -3);
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding", () => {
    it("should return decoded message as a string", () => {
      const actual = caesar("thinkful", 3, false);
      expect(actual).to.be.a("string");
    });
    it("should decode correctly when positive number entered for shift", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should decode correctly when negative number entered for shift", () => {
      const expected = "thinkful";
      const actual = caesar("qefkhcri", -3, false);
      expect(actual).to.equal(expected);
    });
    it("should ignore capitals", () => {
      const expected = "secret";
      const actual = caesar("AMKZMB", 8, false);
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const expected = "a secret message";
      const actual = caesar("i amkzmb umaaiom", 8, false);
      expect(actual).to.equal(expected);
    });
    it("should ignore non-letter characters", () => {
      const expected = "...secret!";
      const actual = caesar("...amkzmb!", 8, false);
      expect(actual).to.equal(expected);
    });
  });
});
