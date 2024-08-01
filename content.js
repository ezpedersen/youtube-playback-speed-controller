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
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const command = request.command;
  if (command.startsWith("speed")) {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = parseInt(command.slice(-1));
      chrome.runtime.sendMessage({
        playbackRate: video.playbackRate.toFixed(1),
      });
    }
  }
});
