// old SQL version lol

const db = require('../models/userModels.js')

const userController = {};

const baseErr = { log: 'Express error handler caught in userController' };

userController.getUser = async (req, res, next) => {
  try {

  } catch (err) {
    return next({
      ...baseErr,
      message: { err: 'Error occured in userController.getUser' },
    });
  }
}
module.exports = userController;