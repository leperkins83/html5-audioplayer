function loadVideos(){
  fetch('videos/list.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  }).then(function(res){
    return res.json();
  })
  .then(function(resJson){
    console.log(resJson);
    vidyaList = resJson.videoList;
    var videoNamesContainer = document.getElementById("videonames");
    var videoNameElements = '';
    vidyaList.forEach(function(videoName) {
      videoNameElements += buildVideoButton(videoName);
    });
    videoNamesContainer.innerHTML = videoNameElements;
  });
}

function buildVideoButton(videoName){
  videoName1 = videoName.split('.');
  videoName1.splice(videoName1.length-1, 1);
  videoName1 = videoName1.join('');
  return `<button class="video-load-btn" video-src="videos/${videoName}">
    ${videoName1}
    </button>`;
}
