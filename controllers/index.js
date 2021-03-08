const express = require('express');
const quoteRoutes = require('./quotes.js');
const authRoutes = require('./auth.js');
const router = express.Router();

router.use('', quoteRoutes);
router.use('/auth', authRoutes);

module.exports = router;
