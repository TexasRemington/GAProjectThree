var mongoose = require('mongoose');

var stationSchema = new mongoose.Schema({
  stationName: { type: String, required: false },
  owner: { type: String, required: false },
  password: { type: String, required: false},
  dateCreated: {type: Date, default:Date.now(), required: false},
  station_id: { type: String, required: false},
  lat: { type: Number, required: false },
  lon: { type: Number, required: false}
});

var Station = mongoose.model('Station', stationSchema);

module.exports = Station;
