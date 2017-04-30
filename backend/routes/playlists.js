var express = require('express');
var Playlist = require('../models/playlist');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var router = express.Router();


var Music = require('../playlist/OceanF.m4a');

router.get('/playlists', function(req,res){
  Playlist.find({}, function(err, playlists){
    if(err){ console.log(err); }

    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(Music);
    readStream.pipe(res);
  });
});




module.exports = router;
