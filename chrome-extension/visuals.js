var storage = chrome.storage.local;
var storageKey = 'ext-chrome-tablets-history';

storage.get(storageKey, (data) => {
  console.log(data);
});
