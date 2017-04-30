var express = require('express');
var Playlist = require('../playlist');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var router = express.Router();


router.get('/music', function(req,res){
  Playlist.find({}, function(err, playlists){
    if(err){ console.log(err); }

    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(Playlist);
    readStream.pipe(res);
  });
});




module.exports = router;
