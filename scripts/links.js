document.getElementById("bookmarks").addEventListener("click", newFunction);

function newFunction() {
    chrome.tabs.create({ 'url': "www.google.com" });
}
