const { User } = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

// Encrypting passwords using bcrypt
userController.bcrypt = (req, res, next) => {
  // The cost factor determines how much time is needed to calculate a single bcrypt hash
  const saltRounds = 10;
  // Destructure password from request body
  const { password } = req.body;
  // Generate the salt by passing in saltRounds (cost factor)
  bcrypt.genSalt(saltRounds, (err, salt) => {
    // Hash a password by passing in the plaintext into the hash function
    bcrypt.hash(password, salt, (err, hash) => {
      // Save encrypted password into res.locals to be accessed later
      res.locals.encryptedPassword = hash;
      return next();
    });
  });
};

// Signup/save user information in database (mongo)
// When we create a new user, we get their username/hashed pw to store in the database
  // receive username from req.body, password from res.locals after it's been initially hashed
userController.signup = (req, res, next) => {
  User.create(
    // Pass in username from request body and encrypted password
    { username: req.body.username, password: res.locals.encryptedPassword },
    (err, newUser) => {
      if (err) return next(err);
      // newUser assigned ._id in DB --> Save as user ID on res.locals
      res.locals.userId = newUser._id;
      return next();
    }
  );
};

// Check credentials and log user into application
// Finds user in DB with username
userController.login = (req, res, next) => {
  User.find({ username: req.body.username }, (err, result) => {
    // result gives back User doc {username, pw}
    if (err) return next(err);
    // If no matching usernames, return error
    if (result.length === 0) return next('Incorrect username/password combo');
    // Finds first user (or only) with matching username, 
    // use the bcrypt.compare method to compare plaintext password with encrypted password
    bcrypt.compare(req.body.password, result[0].password, (err, match) => {
      if (err) return next(err);
      // Assign doc's ._id as current userId
      if (match) {
        res.locals.userId = result[0]._id;
        return next();
      }
      // If no match, return error
      return next('Incorrect username/password combination');
    });
  });
};

// Getting all users from the db (not sure when we'd use this)
userController.getUsers = (req, res, next) => {
  User.find({}, (err, result) => {
    if (err) return next(err);
    res.locals.users = result;
    return next();
  });
};

userController.googleLogin = (req, res, next) => {
// Successful authentication, redirect home.
  console.log('Google Auth successful!');
  // store user._id in res.locals
  res.locals.userId = req.user._id;
  return next();
};

module.exports = userController;
