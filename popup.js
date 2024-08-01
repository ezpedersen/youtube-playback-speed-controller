var slider = document.getElementById("speedSlider");
var speedOutput = document.getElementById("speedOutput");
window.addEventListener("DOMContentLoaded", () => {
  console.log(1);
  video = document.querySelector("video");
  if (video) {
    speedOutput.innerHTML = video.playbackRate;
  }
});
// speedOutput.innerHTML = document.querySelector("video").playbackRate;
slider.oninput = function () {
  speedOutput.innerHTML = this.value;
  chrome.runtime.sendMessage(this.value);
};
