window.onscroll = function() {scrollFunction()};
function scrollFunction() {console.log();
    if (document.body.scrollTop > 222 || document.documentElement.scrollTop > 222) {
        document.getElementById("gotop").style.display = "block";
    } else {
        document.getElementById("gotop").style.display = "none";
    }
}
function gotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
