var mongoose = require('mongoose');

var stationSchema = new mongoose.Schema({
  stationName: { type: String, required: true },
  owner: { type: String, required: true },
  dateCreated: {type: Date, default:Date.now()},
  station_id: { type: String, required: true},
  location: { type: Number, required: true }
});

var Station = mongoose.model('Station', stationSchema);

module.exports = Station;
