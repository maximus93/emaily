const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


//client_id 995906168481-6ludk26f1jt7v8v7kd5s96qv39789p9q.apps.googleusercontent.com
//client secret PsoeeGJIF_DpyHhhnGVdEE5t


passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log('You Are Listing to '+PORT);
