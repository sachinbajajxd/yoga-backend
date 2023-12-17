const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    enum: ['6-7 AM', '7-8 AM', '8-9 AM', '5-6 PM'],
  },
  paymentDone: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;