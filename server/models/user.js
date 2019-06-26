import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('user', userSchema, 'users');
