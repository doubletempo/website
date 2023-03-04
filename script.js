feather.replace();

if (window.location.host.indexOf('github.io') > -1 && window.location.protocol != "https:"){
   window.location.protocol = "https";
}

scrollButton = document.getElementById("scroll-button");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y > 0) {
        scrollButton.className = "block"
    } else {
        scrollButton.className = "hidden"
    }
};

window.addEventListener("scroll", myScrollFunc);