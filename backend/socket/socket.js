module.exports = function(server){
  // console.log('what is server', server);
  var io = require('socket.io')(server);
  var ss = require('socket.io-stream');
  var fs = require('fs');
  var serveIndex = require('serve-index');
  var path = require('path');


io.on('connection', function(socket) {
  console.log('connection established');
  io.emit('test',true);
  io.emit('connect');
  // socket.on('songName', function(data) {
  //   console.log('in back side socket.on');
  //   var stream = ss.createStream();
  //   console.log('data.name is: ', data.name);
  //   var filename = __dirname+'/playlist/'+data.name+'.mp3';
  //   console.log('filename ', filename);
  //   //var filename = serveIndex('/playlist/', data.name , '.mp3');
  //   // res.writeHead(200, {
  //   //   'Content-Type': 'audio/mpeg' || 'audio/mp4',
  //   //   'Content-Length': stat.size
  //   // });
  //   //fs.createReadStream(filename).pipe(stream);
  //   //ss(socket).emit('audioStream', stream, { name: filename });
  // });
  ss(socket).on('songName', function(data){
    var stream = ss.createStream();
    var filename2 = __dirname+'/playlist/'+data.name+'.mp3';
    console.log('filename in ss socket backend', filename2);
    var MyFileStream = fs.createReadStream(filename2);
    console.log('MyFileStream: ', MyFileStream);
    // MyFileStream.pipe(stream);
    console.log('backend console stream', stream);
    ss(socket).emit('songStreaming', stream);
    // ss(socket).emit('songStreaming', function(){
    //   console.log('inside backend songStreaming');
    //
    //
    // });

  });
});
};
