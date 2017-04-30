var express = require('express');
var Playlist = require('../models/playlist');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var router = express.Router();


var Music = require('../playlist/OceanF.m4a');

var filepath = path.join(__dirname, './playlist/OceanF.m4a');
console.log('filepath ', filepath);

router.get('/playlists', function(req,res){

    if(err){ console.log(err); }

    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(filepath);
    readStream.pipe(res);
  });



module.exports = router;
