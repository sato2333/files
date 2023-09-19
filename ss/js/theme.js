// gotop
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

// lazyload
$("a[data-original]").lazyload({
	effect: "fadeIn",
	threshold: 200,
	failurelimit: 12,
	skip_invisible: false
})

// no-referrer
(function () {
    var meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'no-referrer';
    document.getElementsByTagName('head')[0].appendChild(meta);
})();
