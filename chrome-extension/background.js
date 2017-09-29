console.log("LCT: init background.js from Chrome Tablets");
console.log("LCT: adding event listener...");

var storage = chrome.storage.local;
var storageKey = 'ext-chrome-tablets-history';

function appendHistory(currentVal, historyItem) {
  var list = Array.isArray(currentVal) ? currentVal : []
  list.push(historyItem);
  storage.set({ [storageKey]: list }, (items) => {
   console.log('stored', list.size);
  });
}

chrome.history.onVisited.addListener((historyItem) => {
 console.log(historyItem)
 storage.get(storageKey, (val) => { appendHistory(val[storageKey], historyItem) });
});

chrome.browserAction.onClicked.addListener((data) => {
 chrome.tabs.create({url: "/visuals.html", active: true}, function (data) {
   console.log("LCT: visuals tab.create triggered, data:");
   console.log(data)
 });
});
