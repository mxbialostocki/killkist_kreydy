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
