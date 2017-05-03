require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.PROJ_THREE_DB);

var Station = require('./models/station');

var firstStation = [
  {
    owner: 'Remmington',
    stationName: 'GA WDI-Hot-Tracks'
  },
  {
    owner: 'Jorge Cano',
    stationName: 'Spring Mix Master 2017'
  },
  {
    owner: 'Chris Jauregui',
    stationName: 'Peter is a Platypus'
  },
  {
    owner: 'Peter Weyand',
    stationName: 'Hackers Hot Love Techno Trill'
  }
];

Station.create(firstStation, function(err,station) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Profile inserted: ', station);
  process.exit();
});


// var mongoose = require('mongoose');
//
// var stationSchema = new mongoose.Schema({
//   stationName: { type: String, required: true },
//   owner: { type: String, required: true },
//   password: { type: String, required: true},
//   dateCreated: {type: Date, default:Date.now()},
//   station_id: { type: String, required: true},
//   location: { type: Number, required: true }
// });
//
// var Station = mongoose.model('Station', stationSchema);
//
// module.exports = Station;
