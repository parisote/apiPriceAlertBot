const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true })
.then(db => console.log('DB CONNETED'))
.catch(err => console.error(err));

module.exports = mongoose;