const mongoose = require('mongoose')

const User = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: [{type: String, ref: 'Role'}]
})

module.exports = mongoose.model('User', User)