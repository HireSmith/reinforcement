const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const passport = require('passport');

// const questionRouter = require('./routes/questionRouter');
const userRouter = require('./routes/userRouter');

require('./config/passport')(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//serve static assets 
app.use(express.static(path.resolve(__dirname, '../src/assets')));

// Initialize passport session
app.use(passport.initialize());

app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});


// Not using /api anymore
// Anything related to questions should go to /question route
// app.use('/question', questionRouter);
// All other things (login, encryption, users) taken care of in default path
app.use('/api', userRouter);

// Uncaught error catch-all route
app.use((req, res) => res.status(404).send('Error 404: No content found'));


// Express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log, ' ', err);
  return res.status(errorObj.status).json(err);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});