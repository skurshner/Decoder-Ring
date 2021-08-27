const { substitution } = require("../src/substitution");
const expect = require("chai").expect; // Write your tests here!

describe("Substitution", () => {
  describe("Function Validation", () => {
    it("should be a function", () => {
      const expected = "function";
      const actual = typeof substitution;
      expect(actual).to.equal(expected);
    });
  });
  describe("Error Handling", () => {
    it("should return false if alphabet isn't 26 characters", () => {
      const actual = substitution("thinkful", "short");
      expect(actual).to.be.false;
    });
    it("should return false if alphabet has duplicate characters", () => {
      const actual = substitution("thinkful", "abcdefghijklmnopqrstuvwxya");
      expect(actual).to.be.false;
    });
    it("should return false if substitution alphabet is missing", () => {
      const actual = substitution("thinkful");
      expect(actual).to.be.false;
    });
  });
  describe("Encoding", () => {
    it("should return the encoded message as a string", () => {
      const actual = typeof substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.be.a("string");
    });
    it("should encode correctly", () => {
      const expected = "jrufscpw";
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const expected = "mbymwwmfj";
      const actual = substitution("EXCELLENT", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should ignore spaces", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should ignore special characters", () => {
      const expected = "...mbymwwmfj!";
      const actual = substitution("...excellent!", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should encode correctly with special characters in alphabet", () => {
      const expected = "y&ii$r&";
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding", () => {
    it("should return the decoded message as a string", () => {
      const actual = typeof substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev", false);
      expect(actual).to.be.a("string");
    });
    it("should decode correctly", () => {
      const expected = "thinkful";
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      expect(actual).to.equal(expected);
    });
    it("should work if there are special characters in alphabet", () => {
      const expected = "message";
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const expected = "you are an excellent spy";
      const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
      expect(actual).to.equal(expected);
    });
  });
});
