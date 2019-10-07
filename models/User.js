const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //destructuring

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
