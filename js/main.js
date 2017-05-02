var vidyaList;

loadVideos();

document.getElementById('videonames').addEventListener('click', videoPlayButtonHandler);

document.querySelector('video').addEventListener('ended', playNextVideo);

document.getElementById('slowDown').addEventListener('click', slowDown);

document.getElementById('speedUp').addEventListener('click', speedUp);
