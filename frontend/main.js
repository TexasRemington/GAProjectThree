console.log('sanity check');

$(document).ready(function(){
  var io = require('socket.io-client');
  var ss = require('socket.io-stream');

  var socket = io.connect('http://localhost:5000/playlist');
  var stream = ss.createStream();

  ss(socket).emit('write-file', stream, { name: 'LaNegra.mp3' });
  loadSound().createReadStream('LaNegra.mp3').pipe(stream);
 $('audio').html(loadSound());
});
