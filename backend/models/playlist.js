var mongoose = require('mongoose');

var playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },

});

var Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
