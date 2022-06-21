const express = require('express');
const passport = require('passport');
const userController = require('../archives/userController_oldSQL');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const questionController = require('../controllers/questionController');

const router = express.Router();

// Set up route for post requests to /signup
// Encrypt user password and signs user up with encrypted credentials
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
router.post(
  '/login',
  userController.login,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    console.log('ssid:', res.locals.ssid);
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

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
// if user does ALLOW, then they are automatically redirected to the callback endpoint
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  userController.googleLogin,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    console.log('ssid:', res.locals.ssid);
    // we send the ssid back to the front end
    res.status(200).json({ ssid: res.locals.ssid });
  }
);


module.exports = router;
