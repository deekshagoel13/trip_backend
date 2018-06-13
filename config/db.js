const mongoose = require('mongoose');
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://deeksha:deeksha13@ds251849.mlab.com:51849/tripapp');

module.exports={mongoose}