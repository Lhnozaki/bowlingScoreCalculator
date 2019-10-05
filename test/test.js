const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const BowlingScoreValidator = require("../bowlingScoreValidator");

describe("BowlingScoreValidator", function() {
  it("should be a function", function() {
    expect(BowlingScoreValidator).to.be.a("function");
  });
});
