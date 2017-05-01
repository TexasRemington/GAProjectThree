module.exports = function(server){
  var io = require('socket.io')(server);
  var ss = require('socket.io-stream');
  var fs = require('fs');
  var serveIndex = require('serve-index');
  var path = require('path');


io.on('connection', function(socket) {
  socket.on('audioStream', function(stream) {
    var stream = ss.createStream();
    var filename = serveIndex('/playlist/', path.basename(stream.name));
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg' || 'audio/mp4',
      'Content-Length': stat.size
    });
    ss(socket).emit('audioStream', stream, { name: filename });
    fs.createReadStream(filename).pipe(stream);
  });
});
};
