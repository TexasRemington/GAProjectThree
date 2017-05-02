var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  password: { type: String, required: false },
  username: { type: String, required: false },
  name: { type: String, required: false },
  picture: { type: String, required: false },
  provider: { type: String, required: false},
  user_id: { type: String, required: false}
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
