const { Question } = require('./questionModels.js');

const questionController = {};

questionController.getQuestions = async (req, res, next) => {
  try {
    res.locals.allQuestions = await Question.find({}).exec();
    return next();
  } catch (err) {
    return next({
      log: `questionController.getQuestions: ERROR: ${err}`,
      status: 400,
      message: { err: "Error occurred in questionController.getQuestions" },
    });
  }
};

questionController.findQuestion = async (req, res, next) => {
  try {
    res.locals.question = await Question.findOne({ id });
    return next();
  } catch (err) {
    return next({
      log: `questionController.findQuestion: ERROR: ${err}`,
      status: 400,
      message: { err: "Error occurred in questionController.findQuestion" },
    });
  }
};

//adds or updates a question
// if updating a question, filter by question id/userId
questionController.addQuestion = async (req, res, next) => {
  const { id, userId, company, category, content } = req.body;
  const filter = { id: id, userId: userId };
  const update = { company: company, category: category, content: content };
  const options = {
    new: true, // returns modified doc rather than orginal
    upsert: true, // creates the option if it doesn't exist
  }

  try {
    res.locals.addQues = await Question.findOneAndUpdate(
      filter,
      update,
      options
    );
    return next(); // we can pass the newQuestion back on res.locals if we want
  } catch (err) {
    return next({
      log: `questionController.addQuestion: ERROR: ${err}`,
      status: 400,
      message: { err: "Error occurred in questionController.addQuestion" },
    });
  }
};

// questionController.updateQuestion = async (req, res, next) => {
// };

questionController.deleteQuestion = async (req, res, next) => {
  const { id } = req.body;
  try {
    res.locals.delQues = await Question.findByIdAndDelete(id);
    return next(); // we can pass the delQues back on res.locals if we want
  } catch (err) {
    return next({
      log: `questionController.deleteQuestion: ERROR: ${err}`,
      status: 400,
      message: { err: "Error occurred in questionController.deleteQuestion" },
    });
  }
};

module.exports = questionController;