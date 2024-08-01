chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { command });
  });
});
