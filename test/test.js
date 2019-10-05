const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const BowlingScoreValidator = require("../bowlingScoreValidator");
const perfectScoreBoard = require("./perfectScoreBoard");

describe("BowlingScoreValidator", function() {
  it("should be a function", function() {
    expect(BowlingScoreValidator).to.be.a("function");
  });

  it("Should return a total score of 300 when the player scores all Strikes", function() {
    let myScores = new BowlingScoreValidator(perfectScoreBoard);
    expect(myScores.totalScore()).to.equal(300);
  });
});
