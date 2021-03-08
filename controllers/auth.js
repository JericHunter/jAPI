const express = require('express');
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const router = express.Router();

// SIGN UP FORM
router.get("/sign-up", (req, res) => {
    res.render("sign-up");
});


// LOGIN FORM
router.get('/login', (req, res) => {
    res.render('login');
});

// LOGOUT
router.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.redirect('/');
});

module.exports = router;
