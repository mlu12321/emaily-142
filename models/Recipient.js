const mongoose = require('mongoose');
const { Schema } = mongoose;

// const recipientSchema = new Schema({
//   email: String,
//   responded: { type: Boolean, default: false }
// });

// mongoose.model('recipient', recipientSchema);

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
