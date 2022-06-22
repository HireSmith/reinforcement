const Session = require('../models/sessionModel');

const sessionController = {};

// Initialize a session upon successful login
sessionController.startSession = (req, res, next) => {
  Session.create({ cookieId: res.locals.userId }, (err, result) => {
    // 11000 refers to the mongo error code (due to duplicate entries, bad syntax, etc.)
    if (err && err.code !== 11000) return next(err);
    // Otherwise, set user's id as cookieId
    res.locals.ssid = res.locals.userId;
    return next();
  });
};

// Delete all currently active sessions matching cookie id
sessionController.endSession = (req, res, next) => {
  Session.deleteMany({ cookieId: req.cookies.ssid }, (err) => {
    if (err) return next(err);
    return next();
  });
};

// Verifying user is currently already logged in
sessionController.isLoggedIn = (req, res, next) => {
  Session.find({ cookieId: req.cookies.ssid }, (err, data) => {
    if (err) return next(err);
    if (data.length === 0) return next('User Not Logged In');
    return next();
  });
};

module.exports = sessionController;
