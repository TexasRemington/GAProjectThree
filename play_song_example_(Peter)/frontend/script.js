console.log('sanity check');

$(document).ready(function(){



    function loadSound(stream) {
      var request = new XMLHttpRequest();
      request.open("GET", "https://rocky-tor-16893.herokuapp.com/music/brunoSong", true);

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
