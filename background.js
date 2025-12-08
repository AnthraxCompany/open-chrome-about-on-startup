// Chrome プロファイル起動時に呼ばれる
chrome.runtime.onStartup.addListener(() => {
  // About Chrome (chrome://settings/help) を新しいタブで開く
  chrome.tabs.create({
    url: 'chrome://settings/help',
    active: true
  });
});

