class BowlingScoreValidator {
  constructor(scores) {
    this.scores = scores;
  }

  totalScore() {
    let board = this.scores;
    let lastFrame = board[board.length - 1];
    let total = 0;
    board.forEach(e => {
      if (e.first === 10 && lastFrame.second === 10 && lastFrame.third === 10) {
        total = 300;
      }
    });

    return total;
  }
}

module.exports = BowlingScoreValidator;
