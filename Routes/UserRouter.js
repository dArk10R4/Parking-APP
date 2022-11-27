const express = require('express');
const UserController = require('../Controllers/UserController');
const upload = require('../middleware/file_upload');
const path = require('path');
const passport = require('passport');

router = express.Router();
router.get('/',(req,res)=>{
    res.send('Welcome to my app');
})

router.post('/signup',  UserController.registerUser)

router.post('/signin', UserController.passportLogin )
router.get('/me',UserController.me)
router.post('/logout', UserController.logOut);


module.exports =  router;