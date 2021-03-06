const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('user');

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
  user.findById(id)
  .then(user =>{
    done(null, user);
  })
});

passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},
(accessToken, refereshToken, profile, done) => {
    user.findOne({googleId: profile.id })
    .then((existingUser) => {
        if(existingUser){
            done(null, existingUser);
        }
        else{
            new user({
                googleId: profile.id
            }).save()
            .then(user => done(null, user));

        }
    })
    
})
);