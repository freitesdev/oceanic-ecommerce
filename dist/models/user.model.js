const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 9,
      maxlength: 50,
    },
    address: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 300,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 11,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 255,
    },
    age: {
      type: Number,
      min: 18,
      max: 120,
    },
    status: {
      type: Boolean,
      default: false,
    },
    role: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = User = mongoose.model('user', UserSchema);
