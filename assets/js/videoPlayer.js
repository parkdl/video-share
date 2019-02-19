const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const PlayBtn = document.getElementById("jsPlayButton");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function init() {
  PlayBtn.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}
