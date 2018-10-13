
$( window ).on( "load", function(){
    $("span#kreydyhov").hover(function(){
        kinstance.play();
        },
    function(){
        kinstance.load();
    });
});

// edited from https://stackoverflow.com/questions/15010909/using-jquery-to-play-audio-on-hover#15011106
