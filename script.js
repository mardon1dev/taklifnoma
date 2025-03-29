document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector(".taklifnoma__music");
  const playPauseWrapper = document.querySelector(".taklifnoma__play");
  const playButton = document.querySelector(".play");
  const playingGif = document.querySelector(".playing");

  // Initially hide pause button and playing GIF
  playingGif.style.display = "none";

  playPauseWrapper.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playButton.style.display = "none";
      playingGif.style.display = "block";
    } else {
      audio.pause();
      playButton.style.display = "block";
      playingGif.style.display = "none";
    }
  });

  // Ensure UI updates when audio ends
  audio.addEventListener("ended", function () {
    playButton.style.display = "block";
    playingGif.style.display = "none";
  });
});
