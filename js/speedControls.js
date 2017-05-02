function speedUp(){
  document.querySelector('video').playbackRate += 0.1;
  console.log("speedUp");
}

function slowDown(){
  document.querySelector('video').playbackRate -= 0.1;
  console.log("slowDown");
}
