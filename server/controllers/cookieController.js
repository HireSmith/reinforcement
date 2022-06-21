const cookieController = {};

// Set SSID cookie
cookieController.setSSIDCookie = (req, res, next) => {
  //'ssidUserId', removes all escaped characters "" on userId
  res.cookie('ssid', JSON.stringify(res.locals.userId).replace(/\"/g, ''));
  return next();
};

// Delete cookie on logout
cookieController.deleteCookie = (req, res, next) => {
  res.clearCookie('ssid');
  return next();
};

module.exports = cookieController;
