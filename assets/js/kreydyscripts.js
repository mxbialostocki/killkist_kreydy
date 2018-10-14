// this section edited from https://stackoverflow.com/questions/15010909/using-jquery-to-play-audio-on-hover#15011106
$( window ).on( "load", function(){
    $("span.kreydyhov").hover(function(){
        kinstance.play();
        },
    function(){
        kinstance.load();
    });
});
/*
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'YourSong.ogg');
audioElement.load()
audioElement.addEventListener("load", function() {
  audioElement.play();
}, true);
*/

var source = "././assets/killkist_kreydy_kreyyd.mp3";
 var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() {
     audio.play();
 }, true);
 audio.src = source;

/*
var source = "./assets/killkist_kreydy_kreyyd.mp3";
var audio = new Audio(); // use the constructor in JavaScript, just easier that way
audio.addEventListener("load", function() {
  audio.play();
}, true);
audio.src = source;
audio.autoplay = true; // add this
*/



/*
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });

    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });

    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });

    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });

    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<body>
    <h2>Sound Information</h2>
    <div id="length">Duration:</div>
    <div id="source">Source:</div>
    <div id="status" style="color:red;">Status: Loading</div>
    <hr>
    <h2>Control Buttons</h2>
    <button id="play">Play</button>
    <button id="pause">Pause</button>
    <button id="restart">Restart</button>
    <hr>
    <h2>Playing Information</h2>
    <div id="currentTime">0</div>
</body>
*/
