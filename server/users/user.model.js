const { Schema } = require('mongoose');
const db = require('./../db');

const UserSchema = new Schema({

  email: {
    type: String,
    required: [true, 'You must supply an email']
  },

  password: {
    type: String,
    minlength: [4, 'This password is too short'],
    required: [true, 'You must supply a password']
  },

  tokens: [{
    access: String,
    token: String
  }]

});


module.exports = db.model('User', UserSchema);