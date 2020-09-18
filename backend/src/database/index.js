const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobpositions', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;