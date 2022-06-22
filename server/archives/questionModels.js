const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://jukim98:XfKATZh69OpubsE7@cluster0.zmnzr.mongodb.net/hiresmith?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "hiresmith",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  id: String, // ?
  userId: Number, // this is the primary key of each user in our SQL db
  company: String,
  category: String, // interview, leetcode, SDI, etc.
  content: String, // text content of each question
  versionKey: false,
});
const Question = mongoose.model('question', questionSchema);

const interviewSchema = new Schema({
  id: String, // ?
  userId: Number, // this is the primary key of each user in our SQL db
  company: String,
  questions: [
    {
      questionId: String, //each interview linked to many questions
    }
  ],
  versionKey: false,
});
const Interview = mongoose.model('interview', interviewSchema);

module.exports = {
  Question,
  Interview,
};