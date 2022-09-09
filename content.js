function registerOnMessageListener() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("🚀 ~ file: content.js ~ line 168 ~ chrome.runtime.onMessage.addListener ~ request", message);
    toggleExt(true);
  });
}

registerOnMessageListener()

function toggleExt(open = false) {
  if (document.getElementById("myId1")) {
    if (document.getElementById("myId1").style.display === "none" || open) {
      document.getElementById("myId1").style.display = "block";
    } else {
      document.getElementById("myId1").style.display = "none";
    }
    return false;
  }
  const modal = document.createElement("div");
  // modal.style.display = "none";
  modal.setAttribute("id", "myId1");
  modal.innerHTML = `
    <div id="myId1header"></div>
    <iframe id="ovaledgeExt" style="height:100%;"></iframe>
  `;
  document.body.appendChild(modal);
  const dialog = document.getElementById("myId1");
  // dialog.style.display = "none";
  const iframe = document.getElementById("ovaledgeExt");
  // TODO: find alternate to deprecated method getURL()
  iframe.src = chrome.runtime.getURL("index.html");
  iframe.frameBorder = 0;
  
}