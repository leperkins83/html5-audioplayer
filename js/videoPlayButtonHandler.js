function videoPlayButtonHandler(e) {
var clickedThing = e.target;
if (clickedThing.tagName.toLowerCase() != 'button') return;
console.log(clickedThing);
var videoElement = document.querySelector('video');
var url = clickedThing.getAttribute('video-src');
videoElement.src = url;
videoElement.addEventListener('loadeddata', function(){
  videoElement.play();
});
}
