console.log('sanity check2');

$(document).ready(function(){
console.log('sanity check3');
  window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    console.log('io is: ', io);
    var socket = io('http://localhost:5000/');

  // socket.on('connect', function(){
  //   console.log('front end socket connected succesfully');
  //   socket.emit('songName', {name: 'LaNegra'});
  // })
  //
  // socket.on('audioStream', function(stream) {
  //   console.log('in front side socket.on');
  //   var source = context.createMediaStreamSource(stream);
  //   source.connect(context.destination);
  // });
  //
  // socket.on('test',function(res){
  //   console.log('res is: ', res);
  // })

    // function loadSound(stream) {
    //   var request = new XMLHttpRequest();
    //
    //   request.open("GET", "https://rocky-tor-16893.herokuapp.com/music/brunoSong", true);
    //


    var fileBuffer = [],
    fileLength = 0;

  socket.on('connect', function(){
    console.log('connected on frontend');

    ss(socket).emit('songName', {name: 'testSong'});

    ss(socket).on('songStreaming', function(stream){
      console.log('inside front end songStreaming');
      console.log('stream is ', stream);
      console.log('stream length is ', stream.length);
      var filebuffer = [];
      var fileLength = 0;
      stream.on('data', function(chunk){
          console.log('inside stream on');
          fileLength += chunk.length;
          fileBuffer.push(chunk);
          console.log('filebuffer', filebuffer);
      });
    });
  });

});
