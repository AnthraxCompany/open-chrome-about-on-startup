// Chrome プロファイル起動時に About Chrome を開く
chrome.runtime.onStartup.addListener(() => {
  openChromeHelp();
});

// 拡張アイコンをクリックしたときにも About Chrome を開く
chrome.action.onClicked.addListener(() => {
  openChromeHelp();
});

// 共通処理: chrome://settings/help を新しいタブで開く
function openChromeHelp() {
  chrome.tabs.create({
    url: 'chrome://settings/help',
    active: true
  });
}
