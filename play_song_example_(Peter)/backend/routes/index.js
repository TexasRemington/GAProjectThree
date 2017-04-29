var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var router = express.Router();
var app = express();


app.use(express.static(__dirname + '/public'));

var filepath = path.join(__dirname, 'testSong.mp3');
console.log('filepath ', filepath);

app.get('/music', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(filepath);
    readStream.pipe(res);
})

app.listen(8000);
module.exports = router;
