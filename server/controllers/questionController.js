const path = require('path');
const fetch = require('node-fetch');
const db = require('../models/questionModels');

const questionController = {};

const baseErr = { log: 'Express error handler caught in question controller' };


// CREATE TABLE cards (
//     "_id" serial NOT NULL,
//     "user_id" integer,
//     "date" DATE NOT NULL DEFAULT 'GETDATE()',
//     "company" varchar,
//     "question" varchar NOT NULL,
//     "answer" varchar,
//     "question_type" varchar NOT NULL,
//     CONSTRAINT "cards_pk" PRIMARY KEY ("_id")
// ) ;

// CREATE TABLE cards (
//     _id serial NOT NULL,
//     user_id integer,
//     date DATE NOT NULL DEFAULT 'GETDATE()',
//     company varchar,
//     question varchar NOT NULL,
//     answer varchar,
//     question_type varchar NOT NULL,
//     CONSTRAINT cards_pk PRIMARY KEY (_id)
// ) ;

//   INSERT INTO cards (_id,user_id,date,company,question,answer,question_type)
//   VALUES
//       ('0', '0', '', 'facebook', 'question', 'answer', 'SDI'),
//       ('1', '1', '', 'facebook', 'question', 'answer', 'leetcode');


questionController.getQuestions = async (req, res, next) => {
  try {
    const str = `SELECT * 
    FROM cards c`;

    const data = await db.query(str);
    res.locals.questionArr = data.rows; //returns array of question objs
    res.locals._id = data.rows[0]._id;
    res.locals.user_id = data.rows[0].user_id;
    res.locals.date = data.rows[0].date;
    res.locals.company = data.rows[0].company;
    res.locals.question = data.rows[0].question;
    res.locals.answer = data.rows[0].answer;
    res.locals.question_type = data.rows[0].question_type;
    res.locals.info = [
      res.locals._id,
      res.locals.user_id,
      res.locals.date,
      res.locals.company,
      res.locals.question,
      res.locals.answer,
      res.locals.question_type,
    ];
    console.log('getting all questions!');
    return next();
  } catch (err) {
    return next({
      ...baseErr,
      message: { err: 'Error occured in questionController.getQuestions' },
    });
  }
};

questionController.getQuestion = async (req, res, next) => {
  const { _id } = req.params;
  try {
    const str = `SELECT * 
    FROM cards c 
    WHERE m._id=$1`;
    const params = [_id];

    const data = await db.query(str, params);
    res.locals.questionObj = data.rows[0]; //single object of all single question inf
    console.log('getting selected question!');
    return next();
  } catch (err) {
    return next({
      ...baseErr,
      message: { err: 'Error occured in questionController.getQuestion' },
    });
  }
};


questionController.addQuestion = async (req, res, next) => {
  const { _id, user_id, date, company, question, answer, question_type } = req.body;
  const str = `
  INSERT INTO memes ("_id", "user_id", "date", "company", "question", "answer", "question_type")
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const params = [_id, user_id, date, company, question, answer, question_type];

  try {
    const data = await db.query(str, params);
    return next();
  } catch (err) {
    return next({
      ...baseErr,
      message: { err: 'Error occured in questionController.addQuestion' },
    });
  }
};

questionController.updateQuestion = async (req, res, next) => {
  const { _id, user_id, date, company, question, answer, question_type } = req.body;
  const updateId = _id;
  console.log(user_id);

  const str = `
  UPDATE cards c
  SET "_id"=$1, "user_id"=$2, "date"=$3, "company"=$4, "question"=$5, "answer"=$6, "question_type"=$7
  WHERE m._id=$8`;

  const params = [_id, user_id, date, company, question, answer, question_type, updateId];

  try {
    console.log(updateId);
    const data = await db.query(str, params);
    console.log(data);
    return next();
  } catch (err) {
    return next({
      ...baseErr,
      message: { err: 'Error occured in questionController.updateQuestion' },
    });
  }
};

questionController.deleteQuestion = async (req, res, next) => {
  const { deleteId } = req.params;
  try {
    const str = `DELETE 
    FROM cards c
    WHERE m._id=${deleteId}`;

    const data = await db.query(str);
    console.log(data);
    return next();
  } catch (err) {
    return next({
      ...baseErr,
      message: { err: 'Error occured in questionController.deleteQuestion' },
    });
  }
};

module.exports = questionController;
