const express = require("express");
const QuizController = require("../controllers/quizController");
const { verifyQuizPayload } = require("../middlewares/questionsHandler");
const router = express.Router("");
// Router for getting the questions
router.get("/questions/:level", QuizController.fetchQuiz);
// Router for adding new questions
router.post("/new", verifyQuizPayload, QuizController.addQuestion);

module.exports = router;