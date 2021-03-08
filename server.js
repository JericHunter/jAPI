require('dotenv').config();
const mongoose = require('mongoose');
const util = require('util');
const app = require('./config/express');
const router = require('./controllers/index.js');
require('./data/db');
mongoose.Promise = Promise;

app.use(router);

app.listen(8000, () => {
    console.log('listening on localhost:8000')
});
module.exports = app;
