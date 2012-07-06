var _video;
var _media_stream;

setTimeout(function(){
    (_video = document.getElementById("video")).play();
    if ("getUserMedia" in navigator)
	/* for Opera */
        navigator.getUserMedia(
	    {audio : true, video : true, toString : function(){return "video, audio";}},
            function(s) {
		_media_stream = _video.src = s;
	    }, gotStreamFailed);
    else if ("webkitGetUserMedia" in navigator)
	/* for Chrome and IE */
        navigator.webkitGetUserMedia(
	    {audio : true, video : true, toString : function(){return "video, audio";}},
            function(s) {
                _video.src = webkitURL.createObjectURL(_media_stream = s);
            }, gotStreamFailed);
    else
        gotStreamFailed("This site rquires WebRTC. Please get Chrome or Opera and set MediaStream available.");
}, 1);

function gotStreamFailed(e){
    alert(e);
}
    
