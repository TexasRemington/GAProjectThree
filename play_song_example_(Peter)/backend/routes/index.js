var express = require('express');
var through = require('through');
var orderedMergeStream = require('ordered-merge-stream');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var router = express.Router();
var app = express();
var cors = require('cors');

app.use(cors());



app.get('/music/:songname', function(req, res){
  var streamsong = req.params.songname;
  res.set({'Content-Type': 'audio/mpeg'});

  var readStream = fs.createReadStream(__dirname + '/songs/' + streamsong + '.mp3');
  console.log(__dirname + '/songs/' + streamsong + '.mp3');

  readStream.pipe(res);

  var dataLength = 0;
  readStream.on('data', function (chunk) {
      dataLength += chunk.length;
    })
  readStream.on('end', function () {  // done
      console.log('The length was:', dataLength);
    });
})

module.exports = app;
