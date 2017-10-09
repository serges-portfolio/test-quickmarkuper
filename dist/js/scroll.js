window.onload = function () {
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset; //кол-во прокрученых строчек
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 190; //скорость прокрутки, px
            timer = setTimeout(scrollToTop, 200);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}