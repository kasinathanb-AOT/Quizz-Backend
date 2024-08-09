exports.verifyQuizPayload = (req, res, next) => {
  const { level, questions } = req.body;

  if (!level || !["easy", "moderate", "hard"].includes(level)) {
    return res.status(400).json({ message: "Invalid or missing quiz level." });
  }

  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    return res
      .status(400)
      .json({ message: "Questions are required and should be an array." });
  }

  for (const question of questions) {
    if (
      !question.question ||
      !Array.isArray(question.choices) ||
      question.choices.length === 0 ||
      !question.correctAnswer
    ) {
      return res.status(400).json({
        message:
          "Each question must have a question, choices, and correct answer.",
      });
    }
  }

  next();
};