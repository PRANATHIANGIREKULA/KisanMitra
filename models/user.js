const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kits', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
