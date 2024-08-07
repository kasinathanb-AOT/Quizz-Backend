const Quiz = require("../models/quizModel");

// Creating a new question
exports.addQuestion = async (req, res) => {
  const { level, questions } = req.body;

  if (!level || !questions || questions.length === 0) {
    return res
      .status(400)
      .json({ message: "Level and questions are required." });
  }

  try {
    const quiz = await Quiz.findOne({ level });
    if (quiz) {
      quiz.questions.push(...questions);
      await quiz.save();
      return res
        .status(200)
        .json({ message: "Questions added successfully!", quiz });
    } else {
      const newQuiz = new Quiz({ level, questions });
      await newQuiz.save();
      return res.status(201).json({
        message: "New quiz created and questions added successfully!",
        quiz: newQuiz,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error adding the questions.", error: error.message });
  }
};

// Fetching all teh questions
exports.fetchQuiz = (req, res) => {
  const level = req.params.level;
  Quiz.find({ level: level })
    .then((quiz) => {
      if (quiz.length === 0) {
        return res.status(404).json({ message: "No questions available" });
      }
      res.status(200).json(quiz);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error fetching the users..", error: error.message });
    });
};