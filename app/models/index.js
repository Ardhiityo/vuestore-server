const dbConfig = require('../../config/index');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require('./product')(mongoose);
db.order = require('./order')(mongoose);

module.exports = db;