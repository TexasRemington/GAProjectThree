console.log('sanity check');

$(document).ready(function(){



    function loadSound(stream) {
      var request = new XMLHttpRequest();
<<<<<<< HEAD
      request.open("GET", "https://rocky-tor-16893.herokuapp.com/music/brunoSong", true);
=======
      request.connect("GET", "http://localhost:5000/playlist/LaNegra.mp3", true);
>>>>>>> 96b1a6a9f51369952576b04d9e6a22bbfb58c4cf
      request.responseType = "arraybuffer";

      request.onload = function() {
          var Data = request.response;
          process(Data);
      };

      request.send();
    }

    function onEnded() {
      console.log('playback finished');
    }

    function gotStream() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioContext = new AudioContext();

        // Create an AudioNode from the stream
        var mediaStreamSource = audioContext.createMediaStreamSource(request);

        // Connect it to destination to hear yourself
        // or any other node for processing!
        mediaStreamSource.connect(audioContext.destination);
    }

    navigator.getUserMedia({audio:true}, gotStream, AudioContext);
loadSound();
});
