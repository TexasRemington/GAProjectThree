var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var serveIndex = require('serve-index');
var router = express.Router();



var filepath = serveIndex('/playlist', {'icons': true});
console.log('filepath ', filepath);

app.use('/playlist', serveIndex('../playlist', {'icons': true}));
app.use('/playlist', express.static('../playlist', {'icons': true}));
// express.mime.type['m4a'] = 'video/mp4';
// express.mime.type['mp3'] = 'video/mpeg';
// app.use('/playlist', serveIndex(__dirname + '/playlist'));


router.get('/', function(req, res){
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg' || 'audio/mp4',
      'Content-Length': stat.size
    });
fs.createReadStream(filepath).pipe(res);
})


module.exports = router;
