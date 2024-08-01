var slider = document.getElementById("speedSlider");
var speedOutput = document.getElementById("speedOutput");
// speedOutput.innerHTML = document.querySelector("video").playbackRate;
slider.oninput = function () {
  speedOutput.innerHTML = this.value;
  chrome.runtime.sendMessage(this.value);
};
