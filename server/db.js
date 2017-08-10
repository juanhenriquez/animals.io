const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/animals_io', { useMongoClient: true }, (err) => {
  if (err) {
    console.log('Cannot connect to the db');
  }
  console.log('Connected to the db');
});