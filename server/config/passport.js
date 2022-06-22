const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { User, GoogleUser } = require('../models/userModel.js');

module.exports = function (passport) {

  passport.use(
    new GoogleStrategy(
      {
        clientID: '67987135390-nksj8nk9hfo0n3qdf0m9tpgkuln3tvi1.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3000/auth/google/callback',
      },

      (accessToken, refreshToken, profile, done) => {
        // 
        console.log('the accessToken is:', accessToken);
        // we are checking if the google profile is in our monogDB
        GoogleUser.findOne({ googleId: profile.id }, (err, result) => {
          // if google user already exists in the db
          if (result) {
            console.log('user is: ', result);
            done(null, result);
          } 
          // if not, create user in our db
          else if (!result) {
            new GoogleUser({
              googleId: profile.id,
            })
              .save()
              .then((newUser) => {
                console.log('created new user: ', newUser);
                done(null, newUser);
              });
          } 
          // otherwise, if we have an error
          else if (err) {
            console.log('error from within passport')
            console.log(err);
          }
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
};
