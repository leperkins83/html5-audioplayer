function playNextVideo(){
  //figure out which video is playing
var videoElement = document.querySelector('video');
var videoSrc = videoElement.src;
//get rid of videos in beginning of src
var videoFileName = videoSrc.split('/');
videoFileName = videoFileName[videoFileName.length-1];
//figure out which video is next
console.log(videoFileName);
var currentIndex = vidyaList.indexOf(videoFileName);
console.log(currentIndex);
var nextIndex = (currentIndex+1) % vidyaList.length;
//change the src of the video element
videoElement.src = 'videos/'+ vidyaList[nextIndex];
//play next video when file loads
videoElement.addEventListener('loadeddata', function(){
  videoElement.play();
});
}
