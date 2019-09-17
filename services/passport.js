const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');//one argument, fetch the model class

//turn user to user id and store in session
passport.serializeUser((user, done) => {
    done(null, user.id); //id generated by mongo
});

//turn id back to user
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done )=> {
            //query return a promise
            User.findOne({ googleId: profile.id}).then(existingUser => {
                if (existingUser) {
                    //
                    done(null, existingUser);
                } else {
                    //create instance of a record
                    new User({ googleId: profile.id})
                        .save()
                        .then( user => done(null, user));
                }
            });
        }
    )
);

