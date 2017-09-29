console.log("LCT: init background.js from Chrome Tablets");
console.log("LCT: adding event listener...");

var storage = chrome.storage.local;
var storageKey = 'ext-chrome-tablets-history';

function appendHistory(val) {
  var list = val || [];
  list.push(historyItem);
  storage.set({ [storageKey]: list }, (items) => {
    message('Chrome tablets saved');
  });
}

chrome.history.onVisited.addListener(function (historyItem) {
 storage.get(storageKey, appendHistory);
});

chrome.browserAction.onClicked.addListener(function (data) {

 chrome.tabs.create({url: "/visuals.html", active: true}, function (data) {
   console.log("LCT: visuals tab.create triggered, data:");
   console.log(data)
 });

});
