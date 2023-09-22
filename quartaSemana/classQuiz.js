class Quizz {
  #questions;
  #currentQuestionIndex;
  #score;

  constructor(questions) {
    this.#questions = questions; // Corrected assignment
    this.#currentQuestionIndex = 0;
    this.#score = 0; // Initialize score to 0
  }

  answer(value) {
    let correct = false;
    if (value === this.#questions[this.#currentQuestionIndex].correctAnswer) {
      correct = true;
      this.#score += 100; // Corrected score calculation
    }
    if (this.#currentQuestionIndex < this.#questions.length - 1) {
      this.#currentQuestionIndex++;
      return { gameEnded: false, correct: correct }; // Fixed correct value
    } else {
      return { gameEnded: true, correct: correct }; // Fixed correct value
    }
  }

  get question() {
    return this.#questions[this.#currentQuestionIndex];
  }

  get score() {
    return this.#score; // Fixed variable name
  }
}
