var mongoose = require('mongoose');

var stationSchema = new mongoose.Schema({
  stationName: { type: String, required: true },
  owner: { type: profile.id, required: true },
  dateCreated: Date.now(),
  station_id: { type: station.id, required: true},
  location: { type: Number, required: true }
});

var Station = mongoose.model('Station', stationSchema);

module.exports = Station;
