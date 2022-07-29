chrome.storage.local.get({ "list": [] }, function (object) {
    let dataList = object["list"]
    
    if(dataList.length == 0) {
        let p = document.createElement("p");
        p.innerText = "Empty";
        document.body.appendChild(p);
        return;
    }

    dataList.forEach(function (text) {
        let div = document.createElement("ul");
        div.innerText = text;
        document.body.appendChild(div);
    })
})