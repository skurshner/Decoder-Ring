const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should be a function", () => {
    const expected = "function";
    const actual = typeof caesar;
    expect(actual).to.equal(expected);
  });
  it("should return false if there is no shift value", () => {
    const actual = caesar("a");
    expect(actual).to.be.false;
  });
  it("should return false if shift value is 0", () => {
    const actual = caesar("a", 0);
    expect(actual).to.be.false;
  });
  it("should return false if shift value is less than -25", () => {
    const actual = caesar("a", -26);
    expect(actual).to.be.false;
  });
  it("should return false if shift value is greater than 25", () => {
    const actual = caesar("a", 26);
    expect(actual).to.be.false;
  });
});
