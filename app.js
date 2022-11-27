const dotenv = require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
var MongoStore = require('connect-mongo');
const passport = require('passport');
const initializePassport = require("./utilities/passport-config");
// Routes
const UserRouter = require('./Routes/UserRouter');


// Control field
mongoose.connect(process.env.MONGODB_CONNECTION_URL);

const app = express();

findByUsername = (username) => {
    User.find({
        $or: [
            { username },
            { 'email': username },
            
        ]
    }, function (err, docs) {
        if (!err) return docs[0];
    });
}
initializePassport(passport, async (username) => {
    docs = await User.find({
        $or: [
            { username },
            { 'email': username },

        ]
    });
    return docs[0];
},async (id) => {
  var user = await User.findById(id);
  return user;
})
// app use
app.use(session({
    name: 'sId',
    resave: false,
    saveUninitialized: false,
    secret: process.env.SES_SECRET,
    store: MongoStore.create({
        client: mongoose.connection.getClient(),
        collectionName: 'sessions',

    }),
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
       
        
    }
}));

app.use(passport.initialize())
app.use(passport.session({sameSite:'none',httpOnly:false}));
app.use(UserRouter);


module.exports = app;