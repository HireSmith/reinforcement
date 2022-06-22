const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require("express-session");

require('./config/passport')(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//serve static assets 
app.use(express.static(path.resolve(__dirname, '../src/assets')));

//express session middleware used for passport authentication
  //Login sessions require session support
  //All express middleware should come before user-defined routes
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

// Initialize passport session
app.use(passport.initialize());
app.use(passport.session());

// const questionRouter = require('./routes/questionRouter');
const userRouter = require('./routes/userRouter');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

// Not using /api anymore
// Anything related to questions should go to /question route
// app.use('/question', questionRouter);
// All other things (login, encryption, users) taken care of in default path
app.use('/api', userRouter);

// // Similar process to regular login, but we (on req.body) are not sending anything, passport/google login is handling that for us
//   // REQ.BODY: n/a
//   // RES.LOCALS: ssid (userId or User's ._id in DB)
// // first passport auth (selecting profile)
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
// // second auth (redirected to the callback endpoint)
// app.get(
//   '/auth/google/callback',
//   // passport.auth gives ._id of GoogleUser
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   // save ._id as userId
//   userController.googleLogin,
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
//   (req, res) => {
//     console.log('ssid:', res.locals.ssid);
//     // we send the ssid back to the front end
//     res.status(200).json({ ssid: res.locals.ssid });
//   });

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