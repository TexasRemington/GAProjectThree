console.log('sanity check2');

$(document).ready(function(){
console.log('sanity check3');
  window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    console.log('io is: ', io)
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
          var progress = Math.floor((fileLength / fileInfo.size) * 100);
          progress = Math.max(progress - 2, 1);
          deferred.notify(progress);
          fileBuffer.push(chunk);
          console.log('progress', progress);
          console.log('filebuffer', fileBuffer)
      })
    });

    // ss(socket).emit('songName', stream, {name: 'LaNegra'});
    // fs.createReadStream(filename).pipe(stream);

    // ss(socket).emit('songName', stream, {name: 'LaNegra'}, function(fileError, fileInfo){
    //
    //   console.log('inside ss socket emit on front end');
    //
    //   if (fileError) {
    //       deferred.reject(fileError);
    //   } else{
    //     console.log(['File Found!', fileInfo]);
    //
    //     //== Receive data
    //     stream.on('data', function (chunk) {
    //         fileLength += chunk.length;
    //         var progress = Math.floor((fileLength / fileInfo.size) * 100);
    //         progress = Math.max(progress - 2, 1);
    //         deferred.notify(progress);
    //         fileBuffer.push(chunk);
    //         console.log('progress', progress);
    //         console.log('filebuffer', fileBuffer)
    //     });
    //
    //     stream.on('end', function () {
    //
    //           console.log('filebuffer on end', filebuffer);
    //
    //           var filedata = new Uint8Array(fileLength),
    //           i = 0;
    //
    //           //== Loop to fill the final array
    //           fileBuffer.forEach(function (buff) {
    //               for (var j = 0; j < buff.length; j++) {
    //                   filedata[i] = buff[j];
    //                   i++;
    //               }
    //           });
    //
    //           deferred.notify(100);
    //
    //           //== Download file in browser
    //           downloadFileFromBlob([filedata], originalFilename);
    //
    //           deferred.resolve();
    //       });
    //   }
    // });

  });
});
