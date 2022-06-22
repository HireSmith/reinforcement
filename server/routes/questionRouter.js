const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const sessionController = require('../controllers/sessionController');


//retrieves array of Question info objects
router.get('/', 
  // sessionController.isLoggedIn,
  questionController.getQuestions, 
  (req, res) =>
    res.status(200).json(res.locals.questionArr),
);

//retrieves object of Question info
router.get('/:id', 
  // sessionController.isLoggedIn,
  questionController.getQuestion, 
  (req, res) =>
    res.status(200).json(res.locals.questionObj),
);

router.post('/', 
  // sessionController.isLoggedIn,
  questionController.addQuestion, (req, res) =>
    res.status(200).json('Question Added!'),
);

router.put('/', 
  // sessionController.isLoggedIn,
  questionController.updateQuestion, (req, res) => 
    res.status(200).json('Question Updated!')
);

router.delete('/:deleteId', 
  // sessionController.isLoggedIn,
  questionController.deleteQuestion, (req, res) =>
    res.status(200).json('Question Deleted!'),
);

module.exports = router;