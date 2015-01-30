/**
 * Created by rohitghatol on 1/29/15.
 */

var config = require('./config'),
  mongoose = require('mongoose');

module.exports = function(){

  var db = mongoose.connect(config.db, function(err) {
    if (err) {
      console.error('Could not connect to MongoDB!');
      console.log(err);
    }
  });

  require('../models/todo.model.js');
  return db;
}