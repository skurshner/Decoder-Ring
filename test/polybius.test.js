const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius", () => {
  describe("Function Validation", () => {
    it("should be a function", () => {
      const expected = "function";
      const actual = typeof polybius;
      expect(actual).to.equal(expected);
    });
  });
  describe("Error Handling", () => {
    it("should return false if length of encoded input is odd", () => {
      const actual = polybius("111", false);
      expect(actual).to.be.false;
    });
    it("should return false if length of encoded input with spaces is odd", () => {
      const actual = polybius("111 11", false);
      expect(actual).to.be.false;
    });
  });
  describe("Encoding", () => {
    it("should return the encoded message as a string", () => {
      const actual = typeof polybius("hello");
      expect(actual).to.be.a("string");
    });
    it("should encode both 'i' and 'j' as '42'", () => {
      const expected = "4242";
      const actual = polybius("ij");
      expect(actual).to.equal(expected);
    });
    it("should encode correctly", () => {
      const expected = "4432423352125413";
      const actual = polybius("thinkful");
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("hello world");
      expect(actual).to.equal(expected);
    });
    it("should ignore upper-case letters", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("HELLO WORLD");
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding", () => {
    it("should return the decoded message as a string", () => {
      const actual = typeof polybius("11", false);
      expect(actual).to.be.a("string");
    });
    it("should decode '42' as '(i/j)'", () => {
      const expected = "(i/j)(i/j)";
      const actual = polybius("4242", false);
      expect(actual).to.equal(expected);
    });
    it("should decode correctly", () => {
      const expected = "th(i/j)nkful";
      const actual = polybius("4432423352125413", false);
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal(expected);
    });
  });
});
