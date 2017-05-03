require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.PROJ_THREE_DB);

var Profile = require('./models/profile');

var firstProfile = [
  {
    username: 'a',
    password: 'b'
  }
];

Profile.create(firstProfile, function(err, profile) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Profile inserted: ', profile);
  process.exit();
});
