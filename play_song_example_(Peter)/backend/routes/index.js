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


  // app.use(express.static(__dirname + '/public'));
  // var earworm = path.join(__dirname, 'testSong.mp3');
  //
  //
  // app.use(express.static(__dirname + '/public'));
  // var bruno = path.join(__dirname, 'brunoSong.mp3')




app.get('/music', function(req, res){

  fs.unlinkSync(__dirname + '/returnSong/allSongs.mp3');
  var dhh = fs.createWriteStream(__dirname + '/returnSong/allSongs.mp3');
  var files = fs.readdirSync(__dirname + '/songs');
  var songArray = [];

  files.forEach(function (file) {
    songArray.push(file);
  });

  function recursiveMerge(){
    if (!songArray.length) {
      dhh.end("Done");
      res.set({'Content-Type': 'audio/mpeg'});
      var readStream = fs.createReadStream(__dirname + '/returnSong/allSongs.mp3');
      readStream.pipe(res);
      return;
    }

    currentfile = __dirname + '/songs/' + songArray.shift();
    stream = fs.createReadStream(currentfile);
    stream.pipe(dhh, {end: false});

    stream.on("end", function() {
      console.log(currentfile + ' appended');
      recursiveMerge();
    });
  }
  recursiveMerge();


})

app.listen(8000);
module.exports = router;


// var song1 = through();
// var song2 = through();
//
// var streams = [
//   song1,
//   song2
// ];
//
// song1.pause();
// song2.pause();
//
// var mergedStream = orderedMergeStream(streams);
//
// var cache = [];
//
// mergedStream.on('data', function(data){
//   cache.push(data);
// });
//
//
//
//
// var earworm = fs.readFile(filepath, function read(err, data) {
//   if (err) {
//       throw err;
//   }
//   return(data);
// });
//
// app.use(express.static(__dirname + '/public'));
// var filepath = path.join(__dirname, 'brunoSong.mp3');
//
// var bruno = fs.readFile(filepath, function read(err, data) {
//   if (err) {
//       throw err;
//   }
//   return(data);
// });
//
//
//
//
// song1.write(earworm);
// song1.end();
// song2.write(bruno);
// song2.end();
//
//
// mergedStream.on('end', function() {
//   console.log("inside end this is the cache: ", cache); // Will output: ["lets", "go", "to", "space!"]
// });







//
// console.log('ONE');
//
// res.set({'Content-Type': 'audio/mpeg'});
// app.use(express.static(__dirname + '/public'));
// var filepath = path.join(__dirname, 'testSong.mp3');
//
// var song1 = through(function write(filepath) {
//   this.queue(filepath) //data *must* not be null
//   console.log('inside song1 through');
// });
//
// res.set({'Content-Type': 'audio/mpeg'});
// app.use(express.static(__dirname + '/public'));
// var filepath = path.join(__dirname, 'brunoSong.mp3');
//
// var song2 = through(function write(filepath) {
//   this.queue(filepath) //data *must* not be null
//   console.log('inside song2 through');
// });
//
// var streams = [
//   song1,
//   song2
// ];
//
// console.log('streams: ', streams);
//
// song1.pause();
// song2.pause();
//
// var mergedStream = orderedMergeStream(streams);
//
// mergedStream.on('data', function(data){
//   console.log('inside mergedStream');
//   cache.push(data);
//   console.log('cache: ', cache);
// });
