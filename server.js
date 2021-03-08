require('dotenv').config();
const mongoose = require('mongoose');
const util = require('util');
const app = require('./config/express');
require('./data/db');
mongoose.Promise = Promise;

app.use(router);

if (!module.parent) {
    const port = process.env.PORT
    app.listen(process.env.PORT, () => {
        console.log(`app listening on port ${port}`);
    });
}
