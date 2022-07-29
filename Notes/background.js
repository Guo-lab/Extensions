chrome.runtime.onInstalled.addListener(() => {
    
    chrome.contextMenus.create({
        id: 'LOG',
        title: "WriteDown: %s",
        contexts: ["selection"]
    });

});


chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId == "LOG") {
        chrome.storage.local.get({ "list": [] }, function (object) {
            let dataList = object["list"];
            dataList.push(info.selectionText);
            
            chrome.storage.local.set({ "list": dataList });
        })
    }
});