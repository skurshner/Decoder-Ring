const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  describe("Function Validation", () => {
    it("should be a function", () => {
      const expected = "function";
      const actual = typeof polybius;
      expect(actual).to.equal(expected);
    });
    it("should return a string", () => {
      const actual = typeof polybius(11);
      expect(actual).to.be.a("string");
    });
    describe("Error Handling", () => {
      it("should return false if length of input is odd while decoding", () => {
        const actual = polybius("11 1", false);
        expect(actual).to.be.false;
      });
    });
  });
});
