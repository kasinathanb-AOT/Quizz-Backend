const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
    enum: ["easy", "medium", "hard"],
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      choices: {
        type: [String],
        required: true,
      },
      correctAnswer: {
        type: String,
        required: true,
      },
    },
  ],
  perQuestionScore: {
    type: Number,
    default: function () {
      switch (this.level) {
        case "easy":
          return 5;
        case "medium":
          return 10;
        case "hard":
          return 15;
        default:
          return 0;
      }
    },
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;