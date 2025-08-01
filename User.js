const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['seeker', 'employer', 'admin'], default: 'seeker' },
  profile: Object,
  resumeScore: Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
