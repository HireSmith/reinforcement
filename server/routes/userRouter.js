const express = require('express');
const passport = require('passport');
const userController = require('../archives/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const questionController = require('../controllers/questionController');

const router = express.Router();

// Set up route for post requests to /signup
// Encrypt user password and signs user up with encrypted credentials
  // REQ.BODY: **PASSWORD** 
  // RES.LOCALS: n/a 
router.post(
  '/signup',
  userController.bcrypt,
  userController.signup,
  (req, res) => {
    res.status(200).json('Sign Up Successful');
  }
);

// Set up route for post requests to /login
  // login checks encrypted credentials and starts session
  // REQ.BODY: **USERNAME** 
  // RES.LOCALS: ssid (userId or User's ._id in DB)
router.post(
  '/login',
  // find ._id of user in DB, assign to userId
  userController.login,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    console.log('ssid:', res.locals.ssid);
    // send ssid back to the frontend
    res.status(200).json({ ssid: res.locals.ssid });
  }
);

// Similar process to regular login, but we (on req.body) are not sending anything, passport/google login is handling that for us
  // REQ.BODY: n/a
  // RES.LOCALS: ssid (userId or User's ._id in DB)
// first passport auth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
// if user does ALLOW, then they are automatically redirected to the callback endpoint
router.get(
  '/auth/google/callback',
  // passport.auth gives ._id of GoogleUser
  passport.authenticate('google', { failureRedirect: '/login' }),
  // save ._id as userId
  userController.googleLogin,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    console.log('ssid:', res.locals.ssid);
    // we send the ssid back to the front end
    res.status(200).json({ ssid: res.locals.ssid });
  }
);

// Set up route for get requests to /logout
  // end any existing sessions
router.get(
  '/logout',
  sessionController.endSession,
  (req, res) => {
    res.status(200).json('Logged Out Successfully');
  }
);



module.exports = router;
