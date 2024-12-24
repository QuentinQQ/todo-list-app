const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  userName: { type: String },
  googleId: { type: String },
  createAt: { type: Datetime, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
