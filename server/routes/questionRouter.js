const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Retrieves all questions from DB
router.get(
  '/questions',
  sessionController.isLoggedIn,
  questionController.getQuestions,
  (req, res) => {
    res.status(200).json(res.locals.questions);
  }
);

// Posting questions to DB
router.post(
  '/questions',
  // check if current user is signed in
  sessionController.isLoggedIn,
  // add question to SQL database
  questionController.addQuestion,
  (req, res) => {
    res.status(200).json('Question Uploaded Successfully');
  }
);

// retrieves all questions in db
router.get('/', questionController.getQuestions, (req, res) =>
  res.status(200).json(res.locals.allQuestions)
);

// retrieve one question in db
router.get('/:id', questionController.findQuestion, (req, res) =>
  res.status(200).json(res.locals.question)
);

// post a question
router.post('/', questionController.addQuestion, (req, res) =>
  res.status(200).json('Question added')
);

// delete a question
router.delete('/', questionController.deleteQuestion, (req, res) =>
  res.status(200).json('Question deleted')
);

module.exports = router;