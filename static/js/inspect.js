// no inspect element

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

document.onkeydown = function(e) {
    if (e.keyCode == 123 || // F12 key
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // CTRL+SHIFT+I
        (e.ctrlKey && e.shiftKey && e.keyCode == 74)) { // CTRL+SHIFT+J
        return false;
    }
};

