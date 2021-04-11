// eslint-disable-next-line import/no-unassigned-import
import './options-storage.js';

var x = browser.extension.getURL("")
console.log(x)

browser.contextMenus.create({
    id: "log-selection",
    title: "Net notes",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "log-selection":
            console.log(info.selectionText);
            break;

    }
})