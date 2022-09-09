chrome.action.onClicked.addListener(function (tab) {
  console.log("🚀 ~ file: background.js ~ line 59 ~ chrome.tabs.query ~ tabs", tab)
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      let url = tab.url;
      let host = new URL(url).origin;
      const search = "";
      chrome.tabs.sendMessage(tab.id, {
          type: "setDomain",
          url,
          host,
          search,
      });
  });
});