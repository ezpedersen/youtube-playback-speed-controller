let isShiftPressed = false;
let step = 0.1;
document.addEventListener("keydown", (event) => {
  if (event.key === "Shift") {
    isShiftPressed = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Shift") {
    isShiftPressed = false;
  }
});

document.addEventListener("wheel", (event) => {
  if (isShiftPressed) {
    const video = document.querySelector("video");
    if (video) {
      if (event.deltaY < 0) {
        video.playbackRate += step; // Scroll up to increase speed
      } else {
        video.playbackRate -= step; // Scroll down to decrease speed
      }
      chrome.action.setBadgeText({ text: video.playbackRate });
      console.log(`Playback speed: ${video.playbackRate}`);
    }
  }
});
