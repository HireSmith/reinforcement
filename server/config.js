const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { User, GoogleUser } = require('../models/userModel.js');

module.exports = function (passport) {

  passport.use(
    new GoogleStrategy(
      {
        clientID: '783732985723-dfvjj0bro5mbc1u1ouo4e90ue0hjndcg.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3001/auth/google/callback',
      },

      (accessToken, refreshToken, profile, done) => {
        console.log('this is our accessToken:', accessToken);
        // we are checking if the google profile is in our monogDB
        GoogleUser.findOne({ googleId: profile.id }, (err, result) => {
          if (result) {
            // already have this user
            console.log('user is: ', result);
            done(null, result);
          } else if (!result) {
            // if not, create user in our db
            new GoogleUser({
              googleId: profile.id,
            })
              .save()
              .then((newUser) => {
                console.log('created new user: ', newUser);
                done(null, newUser);
              });
          } else if (err) {
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
