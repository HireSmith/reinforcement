const express = require('express');

const questionController = require('../controller/questionController');

const router = express.Router();

// retrieves all questions in db
router.get('/', questionController.getQuestions, (req, res) =>
  res.status(200).json(res.locals.allQuestions)
);

// retrieve one question in db
router.get('/:questionId', questionController.findQuestion, (req, res) =>
  res.status(200).json(res.locals.question)
);

// post a question
router.post('/', questionController.addQuestion, (req, res) =>
  res.status(200).json('Question added')
);

// update a question
// router.patch('/', questionController.updateQuestion, (req, res) =>
//   res.status(200).json('Question updated')
// );

// delete a question
router.delete('/', questionController.deleteQuestion, (req, res) =>
  res.status(200).json('Question deleted')
);

module.exports = router;