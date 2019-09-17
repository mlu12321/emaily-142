const express = require('express'); //common js
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')
require('./models/User');
require('./services/passport'); //execute

mongoose.connect(keys.mongoURI);

const app = express(); // generate an express app

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
authRoutes(app);

const PORT = process.env.PORT || 5000; //for heroku
app.listen(PORT); //tell node to listen to port 5000 